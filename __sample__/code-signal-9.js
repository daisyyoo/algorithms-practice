function solution(inputArray) {
  let maxLength = inputArray[0].length;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
    }
  }
  const newArray = inputArray.filter(word => word.length === maxLength);
  return newArray;
}

const inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];
solution(inputArray);
