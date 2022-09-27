/**
 * @description 反转字符串
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome1(str) {
  const reverseStr = str.split("").reverse().join("")
  return reverseStr === str
}

// 对称性
/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}

const str1 = "aabaa"
const str2 = "aabaab"

console.log(isPalindrome2(str1))
console.log(isPalindrome2(str2))

debugger
