/**
 * Get distance between two coords
 * @param {number} lat1 - latitude 1
 * @param {number} long1 - longitude 1
 * @param {number} lat2 - latitude 2
 * @param {number} long2 - longitude 2
 * @returns {number} distance between coordinates
 */
function getDistanceBetweenCoordinates(lat1, long1, lat2, long2) {
    const r = 6371
    const lat1Rad = lat1 * Math.PI / 180
    const lat2Rad = lat2 * Math.PI / 180
    const long1Rad = long1 * Math.PI / 180
    const long2Rad = long2 * Math.PI / 180

    const a = Math.pow(Math.sin((lat2Rad - lat1Rad) / 2), 2)
    const b = Math.cos(lat1Rad)
    const c = Math.cos(lat2Rad)
    const d = Math.pow(Math.sin((long2Rad - long1Rad) / 2), 2)

    return (2 * r * Math.asin(Math.pow(a + b * c * d, 0.5)))
}

/**
 *
 * @param {number} lat
 * @param {number} long
 * @param {number} d
 * @returns {Array} 4 Extreme points from coords
 */
function getExtremePointsFromCoordinates(lat, long, d) {
  const c = ((180 * (d + 1))) / (Math.PI * 6371)

  return [
      {
          latitude: lat - c,
          longitude: long + c
      },
      {
          latitude: lat + c,
          longitude: long + c
      },
      {
          latitude: lat - c,
          longitude: long - c
      },
      {
          latitude: lat + c,
          longitude: long - c
      }
  ]
}

const test = getExtremePointsFromCoordinates()

module.exports = {
    getDistanceBetweenCoordinates,
    getExtremePointsFromCoordinates
}
