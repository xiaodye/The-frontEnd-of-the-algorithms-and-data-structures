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

console.log("中序遍历：")
function postorder(root) {
  if (!root) return

  postorder(root.left)
  console.log(root.val, "-->")
  postorder(root.right)
}

postorder(root)

debugger
