/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  // 初始化组合数组,初始化结果数组
  const subset = []
  const res = []

  const dfs = (index) => {
    // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
    res.push([...subset])

    for (let i = index; i < nums.length; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(nums[i])
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1)
      // 这是当前数字不存在与组合中的情况
      subset.pop()
    }
  }
  dfs(0)

  return res
}

/**
 * @test
 */
const res = subsets([1, 2, 3])
console.log(res)
