/**
 * Test factorial algorithms
 */
import factorial from "../algorithms/factorial";

describe("factorial", () => {
  it("should return the factorial of a number", () => {
    expect(factorial(4)).toBe(24);
  });
});
