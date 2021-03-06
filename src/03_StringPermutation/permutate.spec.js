const {describe, test, expect} = require("@jest/globals");
const {permAlone} = require("./permutate");

describe('Test permutations', () => {

  test('permAlone should return a number', () => {
    expect(typeof permAlone("asd")).toBe('number');
  });


  test.each([
      ["aab", 2],
      ["aaa", 0],
      ["aabb", 8],
      ["abcdefa", 3600],
      ["abfdefa", 2640],
      ["zzzzzzzz", 0],
      ["a", 1],
      ["aaab", 0],
      ["aaabb", 12]
    ]
  )('permAlone(%j) should return %j', (inputs, expected) => {
    expect(permAlone(inputs)).toBe(expected);
  });

});

