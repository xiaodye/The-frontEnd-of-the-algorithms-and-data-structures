console.log("创建二维数组：")
const arr = Array(7)
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(i + 1).fill(i + 1)
}
console.log(arr)

console.log("遍历二维数组：")
for (let i = 0; i < arr.length; i++) {
  let arrStr = ""
  for (let j = 0; j < arr[i].length; j++) {
    arrStr = arrStr + `${arr[i][j]},`
  }
  console.log(arrStr)
}

debugger
