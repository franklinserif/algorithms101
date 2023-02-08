/**
 * bubble sort algorithms test
 */

import bubbleSort from "../algorithms/bubbleSort";

describe("bubble sort algorithms test", () => {
  it("should return a sort array", () => {
    expect(bubbleSort([-6, 20, 8, -2, 4])).toStrictEqual([-6, -2, 4, 8, 20]);
  });
});
