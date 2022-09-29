function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  // 用leftHead来承接整个区间的前驱结点,headLeftNext存储区间的第一个节点
  let prev, curr, headLeft, headLeftNext
  const dummy = new ListNode()
  dummy.next = head

  // p为标度尺，定位到headLeft
  let p = dummy
  for (let i = 0; i < m - 1; i++) {
    p = p.next
  }

  headLeft = p
  headLeftNext = headLeft.next

  // 双指针
  prev = headLeftNext
  curr = headLeftNext.next

  // 反转区域链表
  for (let i = m; i < n; i++) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  headLeft.next = prev
  headLeftNext.next = curr

  return dummy.next
}

debugger
