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

function BFS(root) {
  const queue = []
  queue.push(root)
  while (queue.length) {
    const top = queue.shift()
    console.log(top.val)

    if (top.left) {
      queue.push(top.left)
    }
    if (top.right) {
      queue.push(top.right)
    }
  }
}

/**
 * @test
 */
BFS(root)
