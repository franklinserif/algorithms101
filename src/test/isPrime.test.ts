/**
 * Prime number algirthms test
 */

import isPrime from "../algorithms/isPrime";

describe("test prime number function ", () => {
  it("should return true if the numer is prime, false if is not", () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });
});
