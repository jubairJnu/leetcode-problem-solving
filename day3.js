const nums = [0, 0, 1, 1, 1, 2, 1, 3, 3, 4];

var removeDuplicates = function (nums) {
  let newNums = [];
  for (i = 0; i < nums.length; i++) {
    if (!newNums.includes(nums[i])) {
      newNums.push(nums[i]);
    }
  }
  return newNums;
};

console.log(removeDuplicates(nums));
