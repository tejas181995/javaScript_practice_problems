const usrInput = require("readline-sync");

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

palindromeNum = getPalindrome(inputNum);

console.log("palindrome of given number: " + palindromeNum);