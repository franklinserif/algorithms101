/**
 * Prime Number
 *
 * problem - Given a natural number "n" determine if the number is prime or not
 * A prime number is a natural number greather then 1 that is not a product of two smaller
 * natural numbers
 *
 * isPrime(5) = true (1*5 or 5*1)
 */

/**
 * Check if the number is prime
 * @param num
 * @returns boolean
 */
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  let result = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) result = false;
  }
  return result;
};

export default isPrime;
