
const pairwise = (...args) => {
  const deny = new Set();
  const [arr, goal] = args;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){

    // if we've already used index i, bail
    if (deny.has(i)){
      continue;
    }

    for(let j = i+1; j < arr.length; j++){
      // if we've already used index j, bail
      if (deny.has(j)){
        continue;
      }

      if (arr[i] + arr[j] === goal) {
        sum += i + j;
        // we've used i and j
        deny.add(j)
        break;
      }
    }
  }
  return sum;
};

module.exports = {
  pairwise
}