const expect = require('chai').expect;
const day3s1 = require('../src/day3-pt1-solution2.js');

describe(`Day 3 - Part 1`, function() {

	describe(`Solution 1`, function() {

		it(`Should return the correct distance for a given number in the data structure`, function() {
			let testCases = [
				{ input: 1, expected: 0 },
				{ input: 12, expected: 3 },
				{ input: 23, expected: 2 },
				{ input: 1024, expected: 31 },
				{ input: 18, expected: 3 },
				{ input: 45, expected: 4 },
				{ input: 34, expected: 3 },
				{ input: 57, expected: 8 },
				{ input: 11, expected: 2 }
			];
			testCases.map(c => {
				expect(day3s1.spiralNumberDistance(c.input), `Error with input: ${c.input}`).to.equal(c.expected);
			});
		})

		it(`Should return the correct distance for the provided challenge number`, function() {
			expect(day3s1.spiralNumberDistance(361527), `Error with input: ${361527}`).to.equal(326);
		})

	});

})
