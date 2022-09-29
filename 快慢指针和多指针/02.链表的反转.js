function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let prev = null
  let curr = head
  while (curr !== null) {
    let next = curr.next
    // 反转链表
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

debugger
