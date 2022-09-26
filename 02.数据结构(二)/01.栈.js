const stack = []

// 入栈过程
stack.push("东北大板")
stack.push("可爱多")
stack.push("巧乐兹")
stack.push("冰工厂")
stack.push("光明奶砖")
stack.push("钟薛高")

while (stack.length) {
  console.log("出栈元素：", stack[stack.length - 1])
  stack.pop()
}

console.log(stack)

debugger
