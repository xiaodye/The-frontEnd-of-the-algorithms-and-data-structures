import TreeNode from "./TreeNode.js"

/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。leetcode：108
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null

  const buildBST = (low, high) => {
    if (low > high) return null

    // 二分一下，取出当前子序列的中间元素
    const mid = Math.floor((low + high) / 2)
    const curr = new TreeNode(nums[mid])
    curr.left = buildBST(low, mid - 1)
    curr.right = buildBST(mid + 1, high)

    return curr
  }

  // root 结点是递归“提”起数组的结果
  const root = buildBST(0, nums.length - 1)

  return root
}
