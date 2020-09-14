const swap = (A, x, y) => {
  [A[x], A[y]] = [A[y], A[x]]
};

const insertionSort = arr => {
  for (let i=1; i < arr.length; i++) {
    for (let j=i; j >= 0; j--) {
      if (arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
      } else {
        break;
      }
    }
  }
  return arr;
}

module.exports = {
  insertionSort
}