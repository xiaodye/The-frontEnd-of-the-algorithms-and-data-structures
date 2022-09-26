function ListNode(val) {
  this.val = val
  this.next = null
}

const node = new ListNode(1)
node.next = new ListNode(2)
console.log(node)

// 插入节点
const node3 = new ListNode(3)

// 在节点1和节点2之间插入节点3
node3.next = node.next
node.next = node3

// 删除node3
node.next = node3.next

debugger
