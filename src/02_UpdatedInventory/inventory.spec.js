const {describe, test, expect} = require("@jest/globals");
const updateInventory = require("./inventory")
/*
 */

describe('Test inv', () => {

  test("updateInventory should return an array", () => {
    expect(Array.isArray(updateInventory([
        [21, "Bowling Ball"],
        [2, "Dirty Sock"]],
      [[1, "Hair Pin"],
        [5, "Microphone"]
      ],))).toBeTruthy()
  })

  test.each([
      // case 1
      [[
        [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
        [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
      ], 6]
      // case 2
    ]
  )('updateInventory(%j) should return an array of length %j', (inputs, expected) => {
    const result = updateInventory(...inputs);
    expect(result.length).toEqual(expected)
  });

  test.each([
    // case 1
    [[
      [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
      [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
    ], [
      [88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
    ],
    // case 2
    [[
      [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
      []
    ], [
      [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
    ],
    // case 3
    [[
      [],
      [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
    ], [
      [67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]
    ],
    // case 4
    [[
      [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
      [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]
    ], [
      [1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"] ]
    ]
  ])('updateInventory(%j) should return %j', (inputs, expected) => {
    const result = updateInventory(...inputs);
    expect(result).toEqual(expected)
  });

});
