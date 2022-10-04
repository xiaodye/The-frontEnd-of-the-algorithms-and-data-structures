/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const mapper = {
    "{": "}",
    "[": "]",
    "(": ")",
  }

  if (!s) return true
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (["{", "[", "("].includes(s[i])) {
      stack.push(s[i])
    } else {
      // 数组为空,pop()返回undefined
      if (mapper[stack.pop()] !== s[i]) {
        return false
      }
    }
  }

  if (stack.length !== 0) return false

  return true
}
