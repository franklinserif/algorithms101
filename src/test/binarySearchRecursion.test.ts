/**
 * binary search with recursion test
 */

import binarySearchRecursion from "../algorithms/binarySearchRecursion";

describe("Binary search recursion test", () => {
  it("should return the number if exist and if not return -1", () => {
    expect(binarySearchRecursion([-5, 2, 4, 6, 10], 10)).toBe(4);
    expect(binarySearchRecursion([-5, 2, 4, 6, 10], 6)).toBe(3);
    expect(binarySearchRecursion([-5, 2, 4, 6, 10], 20)).toBe(-1);
  });
});
