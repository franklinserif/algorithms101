/**
 * Fibonnaci sequence
 *
 * Problem - Given a number "n", find the first elements of the fibonacci sequence
 * in mathematics, the fibonacci sequence is a sequence in which each number is the sum
 * of the two preceding ones.
 *
 * the first two numbers in the sequence are 0 and 1.
 *
 * fibonacci(2) - [0,1]
 * fibonacci(3) - [0,1,1]
 * fibonacci(7) - [0,1,1,2,3,5,8]
 */

/**
 * It create a fibonacci sequence with the num limit
 * @param num
 * @returns fibonacci
 */
const fibonacci = (num: number): number[] => {
  const fib = [0, 1];

  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib;
};

export default fibonacci;
