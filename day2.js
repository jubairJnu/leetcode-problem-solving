var strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  let first = strs[0];

  let result = "";
  for (i = 0; i < first.length; i++) {
    for (c = 1; c < strs.length; c++) {
      if (strs[c][i] !== first[i]) return result;
    }
    result += first[i];
  }
  return result;
};

console.log(longestCommonPrefix(strs));
