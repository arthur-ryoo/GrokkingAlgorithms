function quickSort(array) {
  // Write your code here.
  let less = [];
  let greater = [];
  if (array.length < 2) return array;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) less.push(array[i]);
    if (array[i] >= array[0]) greater.push(array[i]);
  }
  return quickSort(less).concat(array[0], quickSort(greater));
}
