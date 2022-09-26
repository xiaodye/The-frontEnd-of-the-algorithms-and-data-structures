const queue = []

queue.push("小册一姐")
queue.push("小册二姐")
queue.push("小册三姐")

while (queue.length) {
  const top = queue[0]
  console.log("取餐", top)
  queue.shift()
}
console.log(queue)

debugger
