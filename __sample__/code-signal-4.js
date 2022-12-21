function solution(inputArray) {
  const zero = inputArray[0];
  const one = inputArray[1];
  let product1 = zero * one;
  for (let i = 1; i < inputArray.length; i++) {
    const first = inputArray[i];
    const second = inputArray[i + 1];
    const product2 = first * second;
    if (product1 < product2) {
      product1 = product2;
    }
  }
  return product1;
}

const inputArray = [3, 6, -2, -5, 7, 3];
solution(inputArray);

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// solution(inputArray) = 21
