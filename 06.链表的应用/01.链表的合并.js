function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 将两个有序链表合并为一个新的有序链表并返回
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  const head = new ListNode()
  let pointer = head
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pointer.next = l1
      l1 = l1.next
    } else {
      pointer.next = l2
      l2 = l2.next
    }
    pointer = pointer.next
  }

  // 处理链表不等长的情况
  pointer.next = l1 === null ? l2 : l1

  return pointer.next
}

debugger
