function solution(statues) {
  let smallest = statues[0];
  let largest = 0;
  let result = 0;
  for (let i = 0; i < statues.length; i++) {
    if (statues[i] < smallest) {
      smallest = statues[i];
    } else if (statues[i] > largest) {
      largest = statues[i];
    }
  }
  while (smallest < largest) {
    if (!(statues.includes(smallest + 1))) {
      result++;
    }
    smallest++;
  }
  return result;
}
const statues = [3, 6, 7, 9];
solution(statues);

// [input] array.integer statues
// An array of distinct non - negative integers.

// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
//   0 ≤ statues[i] ≤ 20.
//   [output] integer

// The minimal number of statues that need to be added to existing statues such
// that it contains every integer size from an interval[L, R](for some L, R)
// and no other sizes.
