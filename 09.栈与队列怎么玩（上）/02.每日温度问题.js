/**
 * 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
 * 如果之后都不会升高，请在该位置用 0 来代替。
 * @param {number[]} T
 * @return {number[]}
 */

const dailyTemperatures = function (T) {
  const len = T.length
  const stack = []
  const res = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && T[i] > stack[stack.length - 1]) {
      const top = stack.pop()
      res[top] = i - top
    }

    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }

  return res
}
