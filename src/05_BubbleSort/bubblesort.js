
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

module.exports = {
  bubblesort
}