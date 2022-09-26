function ListNode(val) {
  this.val = val
  this.next = null
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)

// 插入节点
const node3 = new ListNode(3)

// 在节点1和节点2之间插入节点3
node3.next = node1.next()
node1.next = node3

// 删除node3
node1.next = node3.next

debugger
