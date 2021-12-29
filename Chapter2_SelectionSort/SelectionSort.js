// O(n^2) time | O(1) space
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    // const temp = array[i];
    // array[i] = array[smallestIndex];
    // array[smallestIndex] = temp;

    // ES6 syntax
    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }

  return array;
}
