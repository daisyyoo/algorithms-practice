// function solution(n) {
//   for (i = 1; i <= n; i++) {

//   }

// }

// adds 4 for 2, 8 for 3, 12 for 4, 16 for 5
// 1, 1-1 = 0, add 1 block
// 2, 2-1 = 1, add 4*1
// 3, 3-1 = 2, add 4*2
// 4, 4-1 = 3, add 4*3
// 5, 5-1 = 4, add 4*4

// Below we will define an n-interesting polygon. Your task is to find the area
// of a polygon for a given n.

// A 1 - interesting polygon is just a square with a side of length 1.
// An n - interesting polygon is obtained by taking the n - 1 - interesting
// polygon and appending 1 - interesting polygons to its rim, side by side.You
// can see the 1 -, 2 -, 3 - and 4 - interesting polygons in the picture below.

// n = 2; solution(n) = 5;
// n = 3; solution(n) = 13;
