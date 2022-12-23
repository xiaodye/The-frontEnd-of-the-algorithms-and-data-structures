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
 * 给定一个二叉树，返回它的前序（先序）遍历序列。
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  // 定义结果数组
  const res = []
  if (!root) return res
  const stack = []
  stack.push(root)

  while (stack.length !== 0) {
    const curr = stack.pop()
    res.push(curr.val)

    // !左右节点进栈顺序不能反
    if (curr.right) {
      stack.push(curr.right)
    }
    if (curr.left) {
      stack.push(curr.left)
    }
  }

  return res
}

// test
const res = preorderTraversal(root)
console.log(res)
