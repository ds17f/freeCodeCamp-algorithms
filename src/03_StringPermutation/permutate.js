const permAlone = (data) => {
  return permutations(data).length;
}


const permutations = (data) => {

  if (!data || typeof data !== "string") {
    throw new Error("Enter a string")

  } else if (data.length < 2) {
    return data
  }

  const perms = [];

  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    const rest = data.slice(0, i) + data.slice(i + 1, data.length)

    for (let permutation of permutations(rest)) {
      if (char !== permutation[0]) {
        perms.push(char + permutation)
      }
    }
  }
  return perms;


};


const permutateBacktrack = (data, ...rest) => {

  if (!rest.length) {
    data = Array.from(data);
    rest.push(0)
    rest.push(data.length)
    rest.push([])
  }
  let [start, end, result] = rest

  if (start === end) {
    result.push(data.join(""))
  } else {
    for (let i = start; i < end; i++) {
      [data[start], data[i]] = [data[i], data[start]];
      permutateBacktrack(data, start + 1, end, result);
      [data[start], data[i]] = [data[i], data[start]];
    }
  }

return result.length;
}


const heapsAlgorithm = (data, ...rest) => {

  if (!rest.length) {
    if (!data || typeof data !== "string") {
      return "Please enter a string"
    }
    data = Array.from(data);
    rest.push(data.length)
    rest.push([])
  }
  let [size, result] = rest;

  if (size === 1) {
    result.push(data.join(""))
    return result;
  } else {
    heapsAlgorithm(data, size - 1, result)
    for (let i = 0; i < size - 1; i++ ) {
      if (size % 2) {
        // odd is 0
        [data[0], data[size - 1]] = [data[size - 1], data[0]];
      } else {
        // even is 1
        [data[i], data[size - 1]] = [data[size - 1], data[i]]
      }
      heapsAlgorithm(data, size - 1, result)
    }

    return result;
  }
}

const swap = (A, x, y) => {
  const tmp = A[x]
  A[x] = A[y]
  A[y] = tmp;
  return A;
}
const generate = (k, A, result) => {
  if (k === 1) {
    result.push(A.join(""));
  } else {
    generate(k -1, A, result)
    for (let i = 0; i < k-1; i++) {
      if (k % 2) {
        // odd
        swap(A, 0, k-1)
      } else {
        // even
        swap(A, i, k-1)
      }
      generate(k -1, A, result)
    }
  }

}

module.exports = {
  permAlone,
  permutateBacktrack,
  permutations,
  heapsAlgorithm,
  generate
};