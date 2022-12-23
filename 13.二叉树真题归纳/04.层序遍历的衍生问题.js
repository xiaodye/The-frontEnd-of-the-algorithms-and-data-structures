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
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  // 初始化结果数组,处理边界条件,初始化队列
  const res = []
  if (!root) return res
  const queue = []

  queue.push(root)
  while (queue.length !== 0) {
    const level = []

    // 缓存刚进入循环时的队列长度，这一步很关键，因为队列长度后面会发生改变
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const top = queue.shift()
      level.push(top.val)

      // 如果当前结点有左右孩子，则推入下一层级
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }

    res.push(level)
  }

  return res
}

// test
const res = levelOrder(root)
console.log(res)
