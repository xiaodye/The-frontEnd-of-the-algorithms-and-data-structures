/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  // 初始化组合数组,初始化结果数组
  const subset = []
  const res = []

  const dfs = (index) => {
    // 剪枝操作
    if (subset.length === k) {
      res.push([...subset])
      return
    }

    for (let i = index; i <= n; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(i)
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1)
      // 这是当前数字不存在与组合中的情况
      subset.pop()
    }
  }

  dfs(1)

  return res
}

/**
 * @test
 */
const res = combine(4, 2)
console.log(res)
