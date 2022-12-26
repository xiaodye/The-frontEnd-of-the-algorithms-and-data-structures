import TreeNode from "./TreeNode.js"

/**
 * 查找某个节点
 * @param {TreeNode} root
 * @param {number} n
 * @returns void
 */
const search = function (root, n) {
  if (!root) return

  if (n === root.val) {
    console.log("target:", root)
  } else if (n < root.val) {
    search(root.left, n)
  } else {
    search(root.right, n)
  }
}
