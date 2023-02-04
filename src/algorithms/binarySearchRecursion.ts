/**
 * Problem - Given a sorted array of "n" elements and a target element "t", find the index of "t"
 * in the array. Return -1 if the target is not found.
 *
 * arr = [-5, 2, 4, 6, 10], t = 10 > Should return 4
 * arr = [-5, 2, 4, 6, 10], t = 6 > Should return 3
 * arr = [-5, 2, 4, 6, 10], t = 20 > Should return -1
 */

/**
 *  binary search with recursion
 * @param arr
 * @param target
 */
function binarySearchRecursion(arr: number[], target: number): number {
  return search(arr, target, 0, arr.length - 1);
}

function search(
  arr: number[],
  target: number,
  leftindex: number,
  rightIndex: number
): number {
  let middleIndex = Math.floor((leftindex + rightIndex) / 2);

  if (target === arr[middleIndex]) return middleIndex;

  if (leftindex < rightIndex) {
    if (target > arr[middleIndex]) {
      return search(arr, target, middleIndex + 1, arr.length - 1);
    } else if (target < arr[middleIndex]) {
      return search(arr, target, 0, middleIndex - 1);
    }
  }

  return -1;
}

export default binarySearchRecursion;
