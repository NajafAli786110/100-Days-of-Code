class LinkedList {
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
}
let l1 = new LinkedList(2);
l1.appendNode(4);
l1.appendNode(3);

let l2 = new LinkedList(5);
l2.appendNode(6);
l2.appendNode(4);

function getLinkedListSum(l1, l2) {
  let sum = "";
  let carry = 0;

  while (l1 || l2) {
    let val1 = l1 ? l1.value : 0;
    let val2 = l2 ? l2.value : 0;

    let add = carry + val1 + val2;

    if (add > 9) {
      carry = Math.floor(add / 10);
      add = add % 10;
    } else carry = 0;

    sum = "" + sum + add;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

    return sum;
}

let ans = getLinkedListSum(l1.head, l2.head);

let dummy = new LinkedList(0);

for (let i = 0; i < ans.length; i++) {
    dummy.appendNode(ans[i]);
}

console.log(dummy.head.next);