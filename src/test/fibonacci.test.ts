/**
 * Test Fibonacci sequence algorithms
 */
import fibonacci from "../algorithms/fibonacci";

describe("fibonacci sequence", () => {
  it("must return the sum of the two preceding number for each next number", () => {
    expect(fibonacci(2)).toStrictEqual([0, 1, 1]);
    expect(fibonacci(4)).toStrictEqual([0, 1, 1, 2, 3]);
    expect(fibonacci(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
