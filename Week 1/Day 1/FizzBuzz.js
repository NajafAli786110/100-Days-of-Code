// Question sirf itna sa hai kai numer agar Divisible by 3 ho to "Fizz" Likho, But Agar divisible by 5 hoto "Buzz" likho. OR agar divisible by 5 & 3 both hoto FIZZBUZZ likho

function checkingFizzOrBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    }
    else if (num % 3 == 0) {
        return "Fizz";
    }
    else if (num % 5 == 0) {
        return "Buzz";
    }
    return num;
}

let result = [];
let num = 15;

for (let i = 0; i < num; i++) {
    result[i] = checkingFizzOrBuzz(i);
}
console.log(result);