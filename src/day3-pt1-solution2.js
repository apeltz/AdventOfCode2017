/**
 * Calculates the shortest path from the number to the center of a two-dimensional grid
 *
 * @param {Number} n  Number for which to calculate the distance from the center
 * @returns {Number}  Manhattan Distance from center of the grid
 * @example
 * spiralNumberDistance(361567);
 * // => 326
 */
function spiralNumberDistance(n) {
	if (Math.sqrt(n)%1 === 0) return Math.sqrt(n) -1;

	let lowerPerfectSquare = Math.floor(Math.sqrt(n))**2;
	let upperPerfectSquare = Math.ceil(Math.sqrt(n))**2;

	let corner = midPoint(upperPerfectSquare,lowerPerfectSquare);
	let toMidPoint1 = n > corner ? Math.abs(n - midPoint(upperPerfectSquare, corner)) : Math.abs(n - midPoint(lowerPerfectSquare, corner));
	let toMidPoint2 = n > corner ? Math.abs(corner - midPoint(lowerPerfectSquare, corner)) : Math.abs(corner - midPoint(upperPerfectSquare, corner));
	return toMidPoint1 + toMidPoint2;
}


function midPoint(n1, n2) {
	return Math.ceil(Math.abs(n1 - n2)/2)+Math.min(n1,n2);
}


module.exports = {
	spiralNumberDistance: spiralNumberDistance
}
