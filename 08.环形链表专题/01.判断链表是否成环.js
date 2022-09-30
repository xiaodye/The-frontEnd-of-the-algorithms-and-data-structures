/**
 * 给定一个链表，判断链表中是否有环(标记法)。
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle1 = function (head) {
  while (head) {
    if (head.flag) {
      return true
    } else {
      head.flag = true
      head = head.next
    }
  }

  return false
}

/**
 * 给定一个链表，判断链表中是否有环(哈希法)。
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle2 = function (head) {
  const set = new Set()
  while (head) {
    if (set.has(head)) {
      return true
    } else {
      set.add(head)
      head = head.next
    }
  }

  return false
}

/**
 * 给定一个链表，判断链表中是否有环(快慢指针)
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle3 = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false
}

debugger
