var isPalindrome = function (x) {
  const numToStr = x.toString();
  // first way
  // const reversedString = numToStr.split('').reverse().join('')

  // second way
  // const reversedString = numToStr.split('').reduce((rev, char) => char + rev, '')

  // third way
  let reversedString = "";
  for (let char of numToStr) {
    reversedString = char + reversedString;
  }

  return numToStr === reversedString;
};
