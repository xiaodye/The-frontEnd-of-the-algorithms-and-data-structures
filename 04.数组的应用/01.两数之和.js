/**
 * @description 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) return [map.get(diff), i]
    map.set(nums[i], i)
  }
}

// test
const result = twoSum([1, 4, 3, 6, 5], 10)
console.log(result)

debugger
