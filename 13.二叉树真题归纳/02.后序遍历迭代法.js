function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
}

/**
 * 给定一个二叉树，返回它的后序遍历序列。
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  // 定义结果数组
  const res = []
  if (!root) return res
  const stack = []
  stack.push(root)

  while (stack.length !== 0) {
    const curr = stack.pop()
    res.unshift(curr.val)

    // !左右节点进栈顺序不能反
    if (curr.left) {
      stack.push(curr.left)
    }
    if (curr.right) {
      stack.push(curr.right)
    }
  }

  return res
}

// test
const res = postorderTraversal(root)
console.log(res)
