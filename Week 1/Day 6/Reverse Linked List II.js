var reverseBetween = function(head, left, right) {
    let dummy = {next: 0};
    dummy.next = head;

    let leftPre = dummy;
    let curr = head;

    for(let i = 0; i< left - 1; i++){
        leftPre = leftPre.next;
        curr = curr.next;
    }

    let subHeadList = curr;
    let preNode = null;

    for(let i= 0; i<= right-left; i++){
        let nextNode = curr.next;
        curr.next = preNode;
        preNode = curr;
        curr = nextNode;
    }

    leftPre.next = preNode;
    subHeadList.next = curr; 

    return dummy.next;
};