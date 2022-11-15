/**
 * @description 使用栈实现队列的下列操作
 */
const MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 假如 stack2 为空，需要将 stack1 的元素转移进来
  if (this.stack2.length === 0) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}

/**
 * Get the front element.
 * @return {number}
 * 这个方法和 pop 唯一的区别就是没有将定位到的值出栈
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length === 0) {
    while (this.stack2 !== 0) {
      this.stack2.push(this.stack1.pop())
    }
  }

  return this.stack2.length && this.stack2[this.stack2.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  // 若 stack1 和 stack2 均为空，那么队列空
  return !this.stack1.length && !this.stack2.length
}

/**
 * @test
 */
const queue = new MyQueue()
queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue)
console.log(queue.pop())
console.log(queue.peek())
console.log(queue.empty())
