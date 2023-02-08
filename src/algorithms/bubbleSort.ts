/**
 * Problem - Given an array of integers, sort the array
 *
 * const arr = [-6, 20, 8 ,-2, 4]
 *
 * bubbleSort(arr) => should return [-6, -2, 4, 8, 20]
 */

/**
 * bubble sort algorithms
 * @param arr
 * @returns arr
 */
function bubbleSort(arr: number[]) {
  let swap = false;
  do {
    swap = false;
    for (let i = 0; i <= arr.length - 1; i++) {
      let temp = 0;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swap = true;
      }
    }
  } while (swap);
  return arr;
}

export default bubbleSort;
