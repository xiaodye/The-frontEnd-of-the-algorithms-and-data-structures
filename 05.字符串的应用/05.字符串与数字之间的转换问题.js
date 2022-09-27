/**
 * 实现一个 atoi 函数，使其能将字符串转换成整数
 * @param {string} str
 * @returns {number}
 */
const myAtoi = function (str) {
  const reg = /\s*([-\+]?[0-9]*).*/
  const groups = str.match(reg)
  // 计算最大值
  const max = Math.pow(2, 31) - 1
  // 计算最小值
  const min = -max - 1

  let targetNum = 0

  if (groups) {
    targetNum = +groups[1]
    if (isNaN(targetNum)) targetNum = 0
  }

  if (targetNum > max) return max
  if (targetNum < min) return min

  return targetNum
}

// test
console.log(myAtoi("42"))
console.log(myAtoi("-42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))

debugger
