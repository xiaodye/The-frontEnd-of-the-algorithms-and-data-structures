// 创建数组
const arr = Array(7).fill(0)
console.log(arr)

// 数组的访问和遍历
console.log("for:")
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i])
}

console.log("forEach:")
arr.forEach((item, index) => {
  console.log(item, index)
})

console.log("map:")
const neWArr = arr.map((item, index) => {
  console.log(item, index)
  return item + 1
})
console.log(neWArr)

debugger
