function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 极端情况：0个或1个结点，则不会重复，直接返回
  if (!head || !head.next) return head
  const dummy = new ListNode()
  dummy.next = head
  const pointer = dummy
  // 当 cur 的后面有至少两个结点时
  while (pointer.next && pointer.next.next) {
    if (pointer.next.val === pointer.next.next.val) {
      const val = pointer.next.val
      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (pointer.next && pointer.next.val === val) {
        pointer.next = pointer.next.next
      }
    } else {
      pointer = pointer.next
    }
  }

  return dummy.next
}

debugger
