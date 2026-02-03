var digits = [9,9];
// Output: [4, 3, 2, 2];

var plusOne = function (digits) {
  const right = digits.length - 1;
  for (i = right; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne(digits));
