const print = (msg)  => {
  // console.log(msg)
}
const swap = (A, x, y) => {
  print({"fn": "swap", A, x, y});
    [A[x], A[y]] = [A[y], A[x]]
};

const quickSortLomutoPartition = (arr, ...args) => {
  const partition = () => {
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

  if (! args.length) {
    args = []
    args.push(0)
    args.push(arr.length - 1)
    args.push("first")
  }
  const [lo, hi, side] = args;

  if ( lo < hi ) {
    const pivot = partition(arr, lo, hi, side);
    quickSortLomutoPartition(arr, lo, pivot - 1, "lo") //NOTE: this is the one diff between the quicksorts based on the partitions
    quickSortLomutoPartition(arr, pivot + 1, hi, "hi")
  }

  return arr;
}

const quickSortHoarePartition = (arr, ...args) => {
  const partition = (arr, lo, hi) => {
    const pivot = arr[Math.floor((hi + lo) / 2)];
    let i = lo - 1;
    let j = hi + 1;
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

  if (! args.length) {
    args = []
    args.push(0)
    args.push(arr.length - 1)
  }
  const [lo, hi] = args;

  if ( lo < hi ) {
    const pivot = partition(arr, lo, hi);
    quickSortHoarePartition(arr, lo, pivot)
    quickSortHoarePartition(arr, pivot + 1, hi)
  }

  return arr;
}

module.exports = {
  quickSortHoarePartition,
  quickSortLomutoPartition
}