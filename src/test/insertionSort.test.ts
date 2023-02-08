/**
 * insertion sort algorithms
 */

import insertionSort from "../algorithms/insertionSort";

describe("insertion sort algorithms test", () => {
  it("should return a sort array", () => {
    expect(insertionSort([-6, 20, 8, -2, 4])).toStrictEqual([-6, -2, 4, 8, 20]);
  });
});
