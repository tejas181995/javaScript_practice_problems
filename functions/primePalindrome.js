const usrInput = require("readline-sync");

function checkprime(num) {
    var flag = 0;
    for (i = 2; i < num; i++) {
        if ((num % i) == 0) {
            flag = 1;
            return 0;
        }
    }
    if(flag == 0){
        return num;
    }
}

function getPalindrome(num){
    var newNum = 0;
    while(num > 0){
        newNum = newNum * 10;
        newNum = newNum + num % 10;
        num = Math.floor(num / 10);

    }
    return newNum;
}

let inputNum = parseInt(usrInput.question("enter number: "));
result = checkprime(inputNum);
if(result != 0){
    console.log( inputNum + " is prime");
}else{
    console.log( inputNum + " is not prime");
}
palindromeNum = getPalindrome(inputNum);
console.log("palindrome number is: "+ palindromeNum);
result = checkprime(palindromeNum);
if(result != 0){
    console.log( palindromeNum + " is prime");
}else{
    console.log( palindromeNum + " is not prime");
}