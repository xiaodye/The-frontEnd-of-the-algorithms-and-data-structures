import TreeNode from "./TreeNode.js"

/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。leetcode：https://leetcode.cn/problems/validate-binary-search-tree/description/
 * @param {TreeNode} root
 * @return {boolean}
 */
const isVaildBST = function (root) {
  /**
   * 定义递归函数
   * @param {TreeNode} root
   * @param {number} minValue
   * @param {number} maxValue
   * @returns {boolean}
   */
  function dfs(root, minValue, maxValue) {
    if (!root) return true
    if (root.val <= minValue || root.val >= maxValue) return false

    // 左右子树必须都符合二叉搜索树的数据域大小关系
    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
  }

  return dfs(root, -Infinity, Infinity)
}
