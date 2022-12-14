class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}
/**
 * 给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null(快慢指针)。
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null

  let slow = head
  let fast: ListNode | null = head

  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next
    if (slow === fast) {
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next!
        slow = slow.next!
      }
      return ptr
    }
  }

  return null
}

export {}
