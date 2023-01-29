/**
 * Factorial of a number;
 *
 * problem - Given an integer "number", find the factorial of that integer
 *
 * in mathematics the factorial of a non-negative integer "n", denoted n!, is
 * the product of all positive integer less than or equal to "n"
 *
 * Factorial of zero is 1;
 */

/**
 * find the factorial of a number
 * @param num
 * @returns number;
 */
const factorial = (num: number): number => {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
};

export default factorial;
