console.log("创建二维数组：")
const arr = Array(7)
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(5).fill(i + 1)
}
console.log(arr)

console.log("遍历二维数组：")
for (let i = 0; i < arr.length; i++) {
  const strArr = []
  for (let j = 0; j < arr[i].length; j++) {
    strArr.push(arr[i][j])
  }
  console.log(...strArr)
}

debugger
