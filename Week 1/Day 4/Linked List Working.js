class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    }
    this.tail = this.head;
  }
  appendNode(userData) {
    let newNode = {
      value: userData,
      next: null,
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  prependNode(userData) {
    let prevNode = {
        value:userData,
        next:null
    }
    prevNode.next = this.head;
    this.head = prevNode;
  }
  traversing(req){
    let counter = 0;
    let currentNode = this.head;

    while(counter != req) {
        counter++;
        currentNode = currentNode.next;
    }

    return currentNode;
  }
  insertNode(place, userData){
    let nodeInsert = {
        value:userData,
        next:null
    }
    let leaderNode = this.traversing(place - 1);
    let nextNode = leaderNode.next;

    leaderNode.next= nodeInsert;
    nodeInsert.next = nextNode;
  }
}

let list = new LinkedList(10);
list.appendNode(20);
list.appendNode(30);
list.appendNode(40);
list.prependNode(0);
list.insertNode(1,5)
console.log(list);
