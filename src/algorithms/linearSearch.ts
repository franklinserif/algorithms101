/**
 * Problem - Given an array of "n" elemnents and a target element "t", find the index of "t"
 * in the array. Return -1 if the element is not found.
 *
 * arr = [-5, 2, 10, 4, 6] t= 10 -> Should return 2
 * arr = [-5, 2, 10, 4, 6] t= 6 -> Should return 4
 * arr = [-5, 2, 10, 4, 6] t= 20 -> Should return -1
 *
 * */

/**
 * Search the index in the array
 * @param num
 */
function linearSearch(num: number) {
  const arr = [-5, 2, 10, 4, 6];
  let founded = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      founded = i;
    }
  }

  return founded;
}

export default linearSearch;
