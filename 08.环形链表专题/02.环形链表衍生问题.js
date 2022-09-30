/**
 * 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null(哈希法)。
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle1 = function (head) {
  const visited = new Set()
  while (head) {
    if (visited.has(head)) return head
    visited.add(head)
    head = head.next
  }
}

/**
 * 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null(快慢指针)。
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle2 = function (head) {
  // 一个节点不可能成环
  if (!head) return null
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.next
      }
      return ptr
    }
  }

  return null
}
