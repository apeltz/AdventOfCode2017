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


/**
 * Calculates the shortest path from the number to the center of a two-dimensional grid
 *
 * @param {Number} n  Number for which to calculate the distance from the center
 * @returns {Number}  Manhattan Distance from center of the grid
 * @example
 * spiralNumberDistanceLoop(361567);
 * // => 326
 */
function spiralNumberDistanceLoop(n) {
	if (Math.sqrt(n)%1 === 0) return Math.sqrt(n) -1;

	let pSqRt, closestPerfectSquare = n;
	let count = 0;
	let iterate = fromPerfectSqr(n-1) < fromPerfectSqr(n+1) ? -1 : 1;

	while(!pSqRt) {
		count++
		closestPerfectSquare += iterate;
		let sqRt = Math.sqrt(closestPerfectSquare);
		if (sqRt%1 === 0) {
			pSqRt = sqRt
		};
	}

	let lowerPerfectSquare = iterate > 0 ? (pSqRt-1)**2 : closestPerfectSquare;
	let upperPerfectSquare = iterate > 0 ? closestPerfectSquare : (pSqRt+1)**2

	let corner = midPoint(upperPerfectSquare,lowerPerfectSquare);
	let toMidPoint1 = n > corner ? Math.abs(n - midPoint(upperPerfectSquare, corner)) : Math.abs(n - midPoint(lowerPerfectSquare, corner));
	let toMidPoint2 = n > corner ? Math.abs(corner - midPoint(lowerPerfectSquare, corner)) : Math.abs(corner - midPoint(upperPerfectSquare, corner));
	return toMidPoint1 + toMidPoint2;
}

function fromPerfectSqr(n) {
	let sqRtRemainder = Math.sqrt(n)%1;
	return sqRtRemainder > .5 ? 1 - sqRtRemainder : sqRtRemainder;
}


module.exports = {
	spiralNumberDistanceLoop: spiralNumberDistanceLoop,
	spiralNumberDistance: spiralNumberDistance
}
