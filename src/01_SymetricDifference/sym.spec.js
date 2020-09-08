const {describe, test, expect} = require("@jest/globals");
const sym = require("./sym.js")

describe('Test sym', () => {

  test.each([
    [[[1, 2, 3], [5, 2, 1, 4]],[3, 4, 5]],
    [[[1, 2, 3], [5, 2, 1, 4, 5]],[3, 4, 5]],
    [[[1, 2, 3, 3], [5, 2, 1, 4]],[3, 4, 5]],
    [[[1, 2, 5], [2, 3, 5], [3, 4, 5]],[1, 4, 5]],
    [[[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]],[1, 4, 5]],
    [[[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],[2, 3, 4, 6, 7]],
    [[[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]],[1, 2, 4, 5, 6, 7, 8, 9]]
  ])('Expect %j to return the array %j', (inputs, expected) => {
    const args = [...inputs]
    const result = sym(...args);
    expect(result).toEqual(expected);
  });

  test.each([
    [[[1, 2, 3], [5, 2, 1, 4]], 3],
    [[[1, 2, 3], [5, 2, 1, 4, 5]], 3],
    [[[1, 2, 3, 3], [5, 2, 1, 4]], 3],
    [[[1, 2, 5], [2, 3, 5], [3, 4, 5]], 3],
    [[[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]], 3],
    [[[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]], 5],
    [[[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]], 8]

  ])('Expect %j to contain %s elements', (inputs, expected) => {
    const result = sym(...inputs);
    expect(result.length).toEqual(expected);
  });




  /*
  test('sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].', () => {
    expect(1).toEqual(2);
  })

  test('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.', () => {
    expect(1).toEqual(2);
  })

  test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].', () => {
    expect(1).toEqual(2);
  })

  test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.', () => {
    expect(1).toEqual(2);
  })

  test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].', () => {
    expect(1).toEqual(2);
  })

  test('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.', () => {
    expect(1).toEqual(2);
  })

   */


});