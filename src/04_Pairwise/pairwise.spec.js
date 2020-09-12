const {describe, test, expect} = require("@jest/globals");
const { pairwise } = require("./pairwise");

describe('Test pairwise', () => {


  test.each([
      [[[1, 4, 2, 3, 0, 5], 7], 11],
      [[[1, 3, 2, 4], 4], 1],
      [[[1, 1, 1], 2], 1],
      [[[0, 0, 0, 0, 1, 1], 1], 10],
      [[[], 100], 0]
    ]
  )('pairwise(%j) should return %j', (inputs, expected) => {
    expect(pairwise(...inputs)).toBe(expected);
  });

});
