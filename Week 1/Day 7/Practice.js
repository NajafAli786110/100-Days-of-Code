function objToArr(head) {
    let currentNode = head;
    let arr = [];
    while (currentNode != null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr;
}


class linkedList {
    constructor(userData) {
        this.head = {
            value: userData,
            next: null
        };
        this.tail = this.head;
    }
    appendNode(userData) {
        let newNode = {
            value: userData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
    }
    reverseList(){
        let preNode = null;
        let curr = this.head;
        this.tail = this.head;

        while (curr != null) {
            let nextNode = curr.next;
            curr.next = preNode;
            preNode = curr;
            curr = nextNode;
        }

        this.head = preNode;
    }
}

let list = new linkedList(2);
list.appendNode(4);
list.appendNode(3);
list.reverseList();

let list2 = new linkedList(5);
list2.appendNode(6);
list2.appendNode(4);
list2.reverseList();


let str1 = objToArr(list.head);
let str2 = objToArr(list2.head);

console.log(str1.sp);
console.log(str2);
