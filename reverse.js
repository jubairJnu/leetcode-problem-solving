function reverseString(str) {
  let result;

  for (let i = str.length - 1; i >= 0; i--) {
    if (result == undefined) {
      result = str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(reverseString("abc"));
