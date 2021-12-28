// O(log(n)) time | O(1) space
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    // You must use Math.floor if you want to solve it in JavaScript
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];

    if (guess == target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // return -1;
}
