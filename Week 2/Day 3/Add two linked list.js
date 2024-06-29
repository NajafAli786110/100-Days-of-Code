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

//   function getLinkedListSum(l1, l2) {
//     let dummy = new LinkedList(0);
//     let carry = 0;

//     while (l1 || l2) {
//       let val1 = l1 ? l1.value : 0;
//       let val2 = l2 ? l2.value : 0;

//       let add = carry + val1 + val2;

//       if (add > 9) {
//         carry = Math.floor(add / 10);
//         add = add % 10;
//       } else carry = 0;

//       dummy.appendNode(add);
//       if (l1) l1 = l1.next;
//       if (l2) l2 = l2.next;
//     }

//       return dummy.head.next;
//   }

//   let ans = getLinkedListSum(l1.head, l2.head);

//   console.log(ans);

function nextNode(userData) {
  console.log(userData);
  let currNode = {
    value: userData,
    next: null,
  };
  return currNode.value;
}
function getLinkedListSum(l1, l2) {
  let sum = nextNode(2);
  console.log(sum);

  //   let dummy = new LinkedList(0);
  //   let carry = 0;

  //   while (l1 || l2) {
  //     let val1 = l1 ? l1.value : 0;
  //     let val2 = l2 ? l2.value : 0;

  //     let add = carry + val1 + val2;

  //     if (add > 9) {
  //       carry = Math.floor(add / 10);
  //       add = add % 10;
  //     } else carry = 0;

  //     let sum = nextNode(add);
  //     dummy.next = sum;
  //     dummy = dummy.next;
  //     if (l1) l1 = l1.next;
  //     if (l2) l2 = l2.next;
  //   }

  //   return dummy.next;
}
