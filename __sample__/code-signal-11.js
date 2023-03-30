function solution(n) {
  const makeString = n.toString();
  const numArray = Array.from(makeString);
  const findHalf = (numArray.length) / 2;
  const firstHalf = numArray.slice(0, findHalf);
  const latterHalf = numArray.slice(findHalf, n.length);
  const firstSum = firstHalf.reduce((x, y) => parseInt(x) + parseInt(y), 0);
  const latterSum = latterHalf.reduce((x, y) => parseInt(x) + parseInt(y), 0);
  if (firstSum === latterSum) {
    return true;
  }
  return false;
}
const n = 134008;
solution(n);

// for integer n with always even number, if the first half sum of numbers
// and the latter half sum of numbers, return true if equal

// find length of n
// divide by 2 to find the end of the first half of numbers and split
//
