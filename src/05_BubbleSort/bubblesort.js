
const bubblesort = arr => {
  let swapped = false;
  let counter = 0;

  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
        counter += 1;
      }
    }
  } while(swapped)

  return arr;
};


const bubblesort2 = arr => {
  let swapped = false;
  let counter = 0;

  for (let i = 0; i < arr.length; i++){
    if (i > 0 && !swapped) {
      // break;
    }
    for (let j = 0; j < arr.length; j++) {
      // if the ith is bigger than the jth
      if (arr[i] < arr[j]) {
        // swap them to move the jth to the left
        [arr[i], arr[j]] = [arr[j], arr[i]]
        swapped = true;
      }
      counter += 1;
    }
  }
  return arr;
};

const bubblesort3 = (arr, ...args) => {
  const swap = (A, x, y) => {
    const tmp = A[x];
    A[x] = A[y];
    A[y] = tmp;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}


module.exports = {
  bubblesort: bubblesort3
}