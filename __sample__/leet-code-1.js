var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const front = nums.slice(0, i);
    const back = nums.slice((i + 1), nums.length);
    const frontSum = front.reduce((x, y) => x + y, 0);
    const backSum = back.reduce((a, b) => a + b, 0);
    if (frontSum === backSum) {
      return i;
    }
  }
  return -1;
};
console.log(pivotIndex);

// find the index where sum of left and sum of right of the index is strictly equal to each other
// if not found, return -1
