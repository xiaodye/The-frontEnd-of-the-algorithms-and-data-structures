class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}
/**
 * 给定一个链表，判断链表中是否有环(哈希法)。
 * @param {ListNode | null} head
 * @return {boolean}
 */
const detectCycle = function (head: ListNode | null): boolean {
  const visted = new Set()
  while (head) {
    if (visted.has(head)) return true
    visted.add(head)
    head = head.next
  }
  return false
}

export {}
