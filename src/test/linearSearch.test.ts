/**
 * linear Search algorightms test
 */

import linearSearch from "../algorithms/linearSearch";

describe("linear Search algoright test", () => {
  it("Should return the index of the number if exist in the array otherwise return -1", () => {
    expect(linearSearch(2)).toBe(1);
    expect(linearSearch(10)).toBe(2);
    expect(linearSearch(20)).toBe(-1);
  });
});
