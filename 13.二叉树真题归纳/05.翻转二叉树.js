function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

const root = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
    },
    right: {
      val: 9,
    },
  },
}

/**
 * 翻转一棵二叉树。
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return root

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left

  return root
}

// test
const res = invertTree(root)
console.log(res)
