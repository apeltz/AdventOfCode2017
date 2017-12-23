const expect = require('chai').expect;
const day4s1 = require('../src/day4-solution1.js');

describe(`Day 4 - Part 1`, function() {

	describe(`Solution 1`, function() {

		it(`Should return the number of rows with unique passphrases, no duplicates`, function() {
			let testPhrases = `aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`
			expect(day4s1.validPassphraseCount(testPhrases, day4s1.noDuplicates)).to.equal(2);
		})

	});

})

describe.only(`Day 4 - Part 2`, function() {

	describe(`Solution 1`, function() {

		it(`Should return the number of rows with unique passphrases, no anagrams`, function() {
			let testPhrases = `abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`
			expect(day4s1.validPassphraseCount(testPhrases, day4s1.noAnagrams)).to.equal(3);
		})

	});

})
