
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

// An excellent solution in O(n) time proposed by my friend Josh Go
// see more here: https://github.com/joshgo/freecodecamp-notes/blob/master/pairwise/pairwise.js
function pairwise_JoshGo(arr, arg) {
  const map = new Map();
  let total = 0;

  arr.forEach((x,i) => {
    let y = arg - x; // x+y = arg, find y

    if (map.has(y) && map.get(y).length > 0) {
      let j = map.get(y).shift();
      total += i + j;
    } else if (map.has(x)) {
      map.get(x).push(i);
    } else {
      map.set(x, [i]);
    }
  });

  return total;
}
module.exports = {
  pairwise,
  pairwise_JoshGo
}