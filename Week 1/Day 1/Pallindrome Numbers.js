function isPalindrome (x) {
    let numSTR = x.toString();
    let lastDigit = numSTR.length - 1;
    let start = 0;
    while(start <= lastDigit)
    {
        if (numSTR[start] !== numSTR[lastDigit]) {
            return false;
        }
        start++;
        lastDigit--;
    }
    return true;
};

var userInput = prompt("Enter your input");
var ans = isPalindrome(userInput);
console.log(ans);