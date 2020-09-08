
const updateInventory = (arr1, arr2) => {
  // All inventory must be accounted for or you're fired!
  const updatedInv = {};
  for (let arr of arr1){
    const [count, item] = arr;
    updatedInv[item] = count;
  }
  for (let arr of arr2){
    const [count, item] = arr;
    if (updatedInv[item]) {
      updatedInv[item] += count;
    } else {
      updatedInv[item] = count;
    }
  }
  return Object.keys(updatedInv).sort().map(item => [updatedInv[item], item]);
}

/*
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

console.log(JSON.stringify(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])))
/*
 should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
*/

module.exports = updateInventory