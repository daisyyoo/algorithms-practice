// test to see if all of the numbers in the array are less than the last num
// declare a variable of the first number in array
// test to see if the next num in array is larger than the previous array just declared
// if so, then have the variable reassigned as the value of the next num
// if not, you can increment a variable, declared elsewhere.
// have the for loop exit and return false when the variable ^ declared is larger than 1
// if not, then at the end of the for loop, return true.

// function solution(sequence) {
//   const lastNum = sequence[sequence.length - 1];
//   for (let i = 0; i < sequence.length; i++) {
//     if (sequence[i] < lastNum) {

//     }
//   }
// }

// Given a sequence of integers as an array, determine whether it is possible
// to obtain a strictly increasing sequence by removing no more than one element
// from the array.

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a
// strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence
// [1, 2]. Alternately, you can remove 2 to get the strictly increasing
// sequence [1, 3].

// input: array.integer sequence
// output: boolean
