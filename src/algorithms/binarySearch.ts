/**
 * Problem - Given a sorted array of "n" elements and a target element "t", find the index of "t"
 * in the array. Return -1 if the target is not found.
 *
 * arr = [-5, 2, 4, 6, 10], t = 10 > Should return 4
 * arr = [-5, 2, 4, 6, 10], t = 6 > Should return 3
 * arr = [-5, 2, 4, 6, 10], t = 20 > Should return -1
 */
/**
 * search a number
 * @param arr
 * @param target
 * @returns number
 */
function binarySearch(arr: number[], target: number) {
  let leftindex = 0;
  let rightIndex = arr.length - 1;

  while (leftindex <= rightIndex) {
    let middleIndex = Math.floor((leftindex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftindex = middleIndex + 1;
    }
  }

  return -1;
}

export default binarySearch;
