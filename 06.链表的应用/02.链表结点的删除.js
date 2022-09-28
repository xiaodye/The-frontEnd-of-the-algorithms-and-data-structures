function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  const pointer = head
  while (pointer !== null && pointer.next !== null) {
    if (pointer.val === pointer.next.val) {
      pointer.next = pointer.next.next
    } else {
      pointer = pointer.next
    }
  }

  return head
}

debugger
