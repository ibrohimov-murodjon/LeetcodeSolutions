// with HashMap
var twoSum = function (nums, target) {
  let newobj = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (newobj.get(nums[i])) return [parseInt(newobj.get(nums[i])), i];
    newobj.set(target - nums[i], i.toString());
  }
};
