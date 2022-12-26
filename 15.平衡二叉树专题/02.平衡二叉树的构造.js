import TreeNode from "./TreeNode.js"

/**
 * 给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
  const nums = []

  /**
   * 中序遍历
   * @param {TreeNode} root
   * @returns void
   */
  const inorder = (root) => {
    if (!root) return
    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }

  /**
   * 构造平衡二叉树
   * @param {number} low
   * @param {number} high
   * @returns {TreeNode}
   */
  const buildAVL = (low, high) => {
    if (low > high) return null

    const mid = Math.floor((low + high) / 2)
    const curr = new TreeNode(nums[mid])
    curr.left = buildAVL(low, mid - 1)
    curr.right = buildAVL(mid + 1, high)

    return curr
  }

  inorder(root)
  return buildAVL(0, nums.length - 1)
}
