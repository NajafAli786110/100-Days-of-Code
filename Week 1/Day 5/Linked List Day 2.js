function reverseListFunc(head, left, right) {
  if (!head || left === right) {
    return;
  }

  let dummy = { next: 0 };
  dummy.next = head;

  let leftPre = dummy;
  let curr = head;

  for (let i = 0; i < left - 1; i++) {
    leftPre = leftPre.next;
    curr = curr.next;
  }

  let subHead = curr;
  let preNode = null;

  for (let i = 0; i <= right - left; i++) {
    let nextNode = curr.next;
    curr.next = preNode;
    preNode = curr;
    curr = nextNode;
  }

  leftPre.next = preNode;
  subHead.next = curr;

  return dummy.next;
}
class linkedList {
  constructor(userData) {
    this.head = {
      value: userData,
      next: null,
    };
    this.tail = this.head;
  }
  appendNode(userData) {
    let newNode = {
      value: userData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }
  removeNode(userData) {
    let prevNode = this.traversing(userData - 1);
    let leaderNode = prevNode.next;
    leaderNode = leaderNode.next;

    prevNode.next = leaderNode;
  }
  traversing(place) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != place) {
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  reverseList() {
    let first = this.head;
    let second = first.next;
    this.tail = this.head;

    while (second) {
      let temp = second.next;
      second.next = first;

      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    this.tail = this.head;

    while (currentNode != null) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
}
let list = new linkedList(2);
list.appendNode(4);
list.appendNode(6);
list.appendNode(8);
list.appendNode(10);
list.appendNode(12);
// list.reverse();
let reverseObject = reverseListFunc(list.head, 3, 5);

console.log(reverseObject);
