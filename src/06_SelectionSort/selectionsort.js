
const swap = (A, x, y) => {
  [A[x], A[y]] = [A[y], A[x]];
}

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i+1; j < arr.length; j++) {
      smallestIdx = arr[j] < arr[smallestIdx]
        ? j
        : smallestIdx;
    }
    if (smallestIdx !== i) {
      swap(arr, i, smallestIdx);
    }
  }

  return arr;
};


module.exports = {
  selectionSort
}