const print = (msg)  => {
  // console.log(msg)
}
const swap = (A, x, y) => {
  print({"fn": "swap", A, x, y});
    [A[x], A[y]] = [A[y], A[x]]
};


const partition = (arr, lo, hi, side) => {
  return parition_HOAR(arr, lo, hi)
}

const parition_HOAR = (arr, lo, hi) => {
  const pivot = Math.floor((hi + lo) / 2);
  let j = lo - 1;
  let i = hi + 1;
  while (true) {
    do {
      i++
    } while (arr[i] < pivot)
    do {
      j--
    } while (arr[j] > pivot)
    if (i >= j) {
      return j;
    }
    swap(arr, i, j)
  }
}

const partition_orig = (arr, lo, hi, side) => {
  const pValue = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    print({side, lo, hi, pValue, i, j, arr})
    if ( arr[j] < pValue ) {
      swap(arr, j, i)
      i += 1;
    }
  }
  swap(arr, i, hi)
  print({i, [side]: JSON.stringify(arr)})
  return i;
};

const quickSort = (arr, ...args) => {
  if (! args.length) {
    args = []
    args.push(0)
    args.push(arr.length - 1)
    args.push("first")
  }
  const [lo, hi, side] = args;

  if ( lo < hi ) {
    const pivot = partition(arr, lo, hi, side);
    quickSort(arr, lo, pivot, "lo")
    quickSort(arr, pivot + 1, hi, "hi")
  }

  return arr;
}

module.exports = {
  quickSort
}