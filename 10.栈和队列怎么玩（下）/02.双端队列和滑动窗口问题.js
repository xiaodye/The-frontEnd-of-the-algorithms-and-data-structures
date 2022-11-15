/**
 * @description 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 */

/**
 * @description 双指针法+遍历
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const res = []
  let left = 0
  let right = k - 1

  /**
   * @description 这个函数用来计算最大值
   * @param {number[]} arr
   * @param {number} left
   * @param {number} right
   * @returns number
   */
  function calMax(arr, left, right) {
    if (!arr || arr.length === 0) return
    let maxNum = arr[left]
    for (let i = left; i <= right; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i]
      }
    }

    return maxNum
  }

  // 当数组没有被遍历完时，执行循环体内的逻辑
  while (right < nums.length) {
    const max = calMax(nums, left, right)
    res.push(max)
    left++
    right++
  }

  return res
}

/**
 * @test
 */
const resArr = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log(resArr)
