var runningSum = function (nums) {
  let sum = 0;
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    output.push(sum);
  }
  return output;
};

console.log(runningSum);

// return the running sum of each index in an array
// input: nums=[1,2,3,4]
// output: [1,3,6,10]
