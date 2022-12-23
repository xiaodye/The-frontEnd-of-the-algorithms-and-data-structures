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
 * 给定一个二叉树，返回它的中序遍历序列。
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  // 定义结果数组,初始化栈结构,用一个 curr 结点充当游标
  const res = []
  const stack = []
  let curr = root

  while (curr || stack.length !== 0) {
    // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()
    res.push(curr.val)

    // 尝试读取 cur 结点的右孩子
    curr = curr.right
  }

  return res
}

// test
const res = inorderTraversal(root)
console.log(res)
