/**
 * @description 给定一个非空字符串str，最多删除一个字符。判断是否能成为回文字符串。
 * @param {string} str
 * @returns {boolean}
 */
const vaildPalindrome = function (str) {
  let left = 0
  let right = str.length - 1

  while (left < right && str[left] === str[right]) {
    left++
    right--
  }

  // 尝试判断跳过左指针或右指针元素后字符串是否回文
  if (isPalindrome(left + 1, right)) return true
  if (isPalindrome(left, right - 1)) return true

  /**
   * @param {number} left
   * @param {number} right
   * @returns {boolean}
   */
  function isPalindrome(left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }

  // 默认返回 false
  return false
}

// test
const str1 = "aabaa"
const str2 = "aabaab"

console.log(vaildPalindrome(str1))
console.log(vaildPalindrome(str2))

debugger
