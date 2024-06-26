function isPalindrome (head) {
    left = 0;
    right = head.length - 1;

    while(left <= right)
    {
        if(head[left] != head[right])
        {
            return false;
        }

        left++;
        right--;
    }
    return true;
};

let arr = [1,2,2,1];
console.log(isPalindrome(arr));