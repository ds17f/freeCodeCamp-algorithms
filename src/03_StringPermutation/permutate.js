
const noDupes = input => {
  for (let i = 1; i < input.length; i++) {
    if (input[i-1] === input[i]) {
      return false;
    }
  }
  return true;
};

const swap = (A, x, y) => {
  const tmp = A[x];
  A[x] = A[y];
  A[y] = tmp;
  return A;
};

let count = 0;
const permAlone = (input, ...args) => {
  if (!args.length) {
    count = 0;
    input = Array.from(input);
    args.push(input.length);
  }
  let [size] = args;
  if (size === 1) {
    if ( noDupes(input.join("")) ) {
      count += 1;
    }
  } else {
    permAlone(input, size-1);

    for (let i = 0; i < size -1; i++) {
      if (size % 2) {
        //odd
        swap(input, 0, size-1);
      } else {
        //even
        swap(input, i, size-1);
      }
      permAlone(input, size-1);
    }
  }
  return count;
}

module.exports = {
  permAlone
}

