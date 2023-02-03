/**
 * Binary search algorithm test
 */

import binarySearch from "../algorithms/binarySearch";

describe("binary search test", () => {
  it("Should return -1 if the number is not in the array or the index if it is", () => {
    expect(binarySearch([-5, 2, 4, 6, 10], 10)).toBe(4);
    expect(binarySearch([-5, 2, 4, 6, 10], 6)).toBe(3);
    expect(binarySearch([-5, 2, 4, 6, 10], 20)).toBe(-1);
  });
});
