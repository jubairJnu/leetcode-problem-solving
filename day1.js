var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      console.log(nums[i] + nums[j], "sum");
      if (nums[i] + nums[j] === target) {
        return console.log([i, j]);
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);
