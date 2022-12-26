import TreeNode from "./TreeNode.js"

/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * @param {TreeNode} root
 * @returns {boolean}
 */
const isBalanced = function (root) {
  let flag = true

  /**
   * 定义递归函数
   * @param {TreeNode} root
   * @returns {number}
   */
  const dfs = function (root) {
    // 如果是空树，高度记为0；如果flag已经false了，那么就没必要往下走了，直接return
    if (!root || flag) return 0

    const left = dfs(root.left)
    const right = dfs(root.right)

    if (Math.abs(left - right) > 1) {
      flag = false
      return 0
    }

    return Math.max(left, right) + 1
  }

  dfs(root)

  return flag
}
