import TreeNode from "./TreeNode.js"

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
 *
 * @param {TreeNode} root
 * @param {number} n
 * @returns {TreeNode}
 */
const deleteNode = function (root, n) {
  if (!root) {
    return root
  }

  if (n === root.val) {
    if (!root.left && !root.right) {
      root = null
    } else if (root.left) {
      // 只存在左子树的情况
      let maxLeft = root.left
      while (maxLeft.right) {
        maxLeft = maxLeft.right
      }
      root.val = maxLeft.val
      root.left = deleteNode(root.left, maxLeft.val)
    } else {
      // 只存在右子树的情况
      let maxRight = root.right
      while (maxRight.left) {
        maxRight = maxRight.left
      }
      root.val = maxRight.val
      root.right = deleteNode(root.right, maxRight.val)
    }
  } else if (n < root.val) {
    root.left = deleteNode(root.left, n)
  } else {
    root.right = deleteNode(root.right, n)
  }

  return root
}

// test
console.log(deleteNode(root, 2))
