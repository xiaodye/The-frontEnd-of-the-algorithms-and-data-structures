import TreeNode from "./TreeNode.js"

/**
 * 插入新节点,leetcode：https://leetcode.cn/problems/insert-into-a-binary-search-tree/description/
 * @param {TreeNode} root
 * @param {number} n
 */
const insertIntoBST = function (root, n) {
  if (!root) {
    root = new TreeNode(n)
    return root
  }

  if (n < root.val) {
    root.left = insertIntoBST(root.left, n)
  } else {
    root.right = insertIntoBST(root.right, n)
  }

  return root
}

// test
const root = insertIntoBST(new TreeNode(3), 4)
console.log(root)
