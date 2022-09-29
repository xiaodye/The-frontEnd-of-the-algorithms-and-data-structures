function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy
  while (n !== 0) {
    fast = fast.next
    n--
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  // 慢指针删除自己的后继结点
  slow.next = slow.next.next

  return dummy.next
}

debugger
