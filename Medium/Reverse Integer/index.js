var reverse = function (x) {
  let result;
  if (x < 0) {
    const numToStr = x.toString().slice(1);
    const reversedString = numToStr.split("").reverse().join("");
    result = Number("-" + reversedString);
  } else {
    const numToStr = x.toString();
    const reversedString = numToStr.split("").reverse().join("");
    result = Number(reversedString);
  }
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }
  return result;
};
