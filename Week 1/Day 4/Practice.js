class LinkedList {
  constructor(userData) {
    this.head = {
      value: userData,
      next: null,
    };
    this.tail = this.head;
  }

  // Appending New Value in Linked List
  appendNode(userData) {
    let newNode = {
      value: userData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // Prepending Before Head
  prependNode(userData) {
    let prevNode = {
      value: userData,
      next: null,
    };
    prevNode.next = this.head;
    this.head = prevNode;
  }

  // Traversing and finding specific Node
  traversing(place) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != place) {
      counter++;
      currentNode.next;
    }

    return currentNode;
  }

  // Inserting Value at specific Place
  inserNode(place, userData) {
    let newNode = {
      value: userData,
      next: null,
    };
    let leaderNode = this.traversing(place - 1);
    let NextNode = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = NextNode;
  }
}

let list = new LinkedList(5);
list.appendNode(15);
list.prependNode(0);
list.inserNode(2, 10);
console.log(list);
