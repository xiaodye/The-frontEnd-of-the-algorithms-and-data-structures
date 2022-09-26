/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const resArr = []
  // 从小往大排
  nums = nums.sort((a, b) => a - b)
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++

        // 处理左指针元素重复的情况
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--

        // 处理右指针元素重复的情况
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      } else {
        // 得到目标数字组合，推入结果数组
        resArr.push([nums[i], nums[left], nums[right]])

        // 左右指针一起前进
        // ?为什么要两个一起推进，一个推进有什么问题
        left++
        right--

        // 若左右指针元素重复，跳过
        while (left > right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }

  return resArr
}

// test
const resArr = threeSum([-1, 0, 1, 2, -1, -4])
console.log(resArr)

debugger
