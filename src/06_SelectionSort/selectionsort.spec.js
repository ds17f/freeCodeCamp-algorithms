const {describe, test, expect} = require("@jest/globals");
const { selectionSort } = require("./selectionsort");

const fnName = "selectionSort"

describe(`Test ${fnName}`, () => {

  test.each([
    [[1,2,3]],
    [[3,2,1]],
    [[9,2,6,4,3,84]],
    [[91, 23, 12, 41, 3]],
    [[1,2,3,7,4,6,5,8,9,10,11]]
    ]
  )(`${fnName}(%j) should return %j`, (inputs) => {
    expect(selectionSort(inputs)).toStrictEqual([...inputs].sort((a,b) => a-b));
  });

});
