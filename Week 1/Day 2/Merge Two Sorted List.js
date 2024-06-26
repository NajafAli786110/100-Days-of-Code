function mergeTwoLists(list1, list2) {
  let len1 = list1.length;
  let len2 = list2.length;
  let finalArr = [];
  let index = 0,
    i = 0,
    j = 0;

  while (i < len1 && j < len2) {
    if (list1[i] <= list2[j]) finalArr[index++] = list1[i++];
    else finalArr[index++] = list2[j++];
  }

  while (i < len1) finalArr[index++] = list1[i++];
  while (j < len2) finalArr[index++] = list2[j++];

  return finalArr;
}


let arr = [1, 2, 4];
let arr2 = [1, 3, 4, 6, 9];
// let finalAns = [];
// finalAns = mergeTwoLists(arr, arr2);
// console.log(finalAns);

let set = new Set(arr);
console.log(set);
