function solution(matrix) {

  const indexArray = [];
  const sumArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === 0) {
        if (matrix[i][j] === 0) {
          indexArray.push(j);
        } else {
          sumArray.push(matrix[i][j]);
        }
      }
      if (matrix[i][j] === 0) {
        indexArray.push(j);
      } else if (!indexArray.includes(j)) {
        sumArray.push(matrix[i][j]);
      }
    }
  }
  const initialValue = 0;
  const total = sumArray.reduce((x, y) => x + y, initialValue);

  return total;
}

const matrix = [[0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]];
solution(matrix);

// should equal to:

// const matrix = [[1, 1, 1, 0],
//                [0, 5, 0, 1],
//                [2, 1, 3, 10]]
// solution(matrix) = 9;

// A 2 - dimensional array of integers representing the cost of each room in the
// building.A value of 0 indicates that the room is haunted.

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 5,
//   1 ≤ matrix[i].length ≤ 5,
//     0 ≤ matrix[i][j] ≤ 10.
// [output] integer
