const nums = [0, 0, 1, 1, 1, 2, 1, 3, 3, 4];

const expectedNums = [0, 1, 2, 3, 4];

var removeDuplicates = function (nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  return nums.length;
};

console.log(removeDuplicates(nums));

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
