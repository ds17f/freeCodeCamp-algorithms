const {describe, test, expect} = require("@jest/globals");
const { quickSortHoarePartition, quickSortLomutoPartition } = require("./quickSort");

const fnName = "quickSort"

describe(`Test ${fnName}`, () => {

  test.each([
      [[1,2,3]],
      [[3,2,1]],
      [[8,2,6,4,3,9]],
      [[9,2,6,4,3,84]],
      [[91, 23, 12, 41, 3]],
      [[1,2,3,7,4,6,5,8,9,10,11]]
    ]
  )(`${fnName}Lomuto(%j) should sort correctly`, (inputs) => {
    expect(quickSortLomutoPartition(inputs)).toStrictEqual([...inputs].sort((a,b) => a-b));
  });

  test.each([
    [[1,2,3]],
    [[3,2,1]],
    [[8,2,6,4,3,9]],
    [[9,2,6,4,3,84]],
    [[91, 23, 12, 41, 3]],
    [[1,2,3,7,4,6,5,8,9,10,11]]
    ]
  )(`${fnName}Hoare(%j) should sort correctly`, (inputs) => {
    expect(quickSortHoarePartition(inputs)).toStrictEqual([...inputs].sort((a,b) => a-b));
  });

});
