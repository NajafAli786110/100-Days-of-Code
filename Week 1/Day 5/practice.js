
// // Now we are going to reverse a linked list
// let lengthOfList = 0; let i = 1;
// let left = list.head;
// let right = list.head;

// while (right) {
//   lengthOfList++;
//   right = right.next;
// }

// // Swap first list with last list
// while (i < lengthOfList / 2) {
//     let temp = right.next;
//     left.next = right.next;
//     right.next = temp;

//     left = left.next;
//     right = right.next;
//     i++;
// }