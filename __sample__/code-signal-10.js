function solution(s1, s2) {
  let count = 0;
  let newS2 = s2;
  for (let i = 0; i < s1.length; i++) {
    if (newS2.includes(s1[i])) {
      count++;
      newS2 = newS2.replace(s1[i], ' ');
    }
  }
  return count;
}

const s1 = 'aabcc';
const s2 = 'adcaa';
solution(s1, s2);

// given 2 strings, find the number of commong characters between them.
