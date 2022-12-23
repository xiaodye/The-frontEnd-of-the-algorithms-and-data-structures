/**
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  // curr 变量用来记录当前的排列内容,res 用来记录所有的排列顺序,visited 用来避免重复使用同一个数字
  const curr = []
  const res = []
  const visited = {}

  const dfs = (nth) => {
    // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
    if (nth === nums.length) {
      // slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
      // 这里是数组拷贝并添加到res
      // res.push(curr.slice())
      res.push([...curr])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = true
        curr.push(nums[i])
        dfs(nth + 1)

        // nums[i]让出当前坑位,去掉“已用过”标识,相当于dfs二叉树中的回退操作
        curr.pop()
        visited[nums[i]] = false
      }
    }
  }
  dfs(0)

  return res
}

/**
 * @test
 */
const res = permute([1, 2, 3])
console.log(res)
