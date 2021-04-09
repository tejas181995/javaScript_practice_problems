var usrInput = require("readline-sync");
inputNum = parseInt(usrInput.question("Enter number: "));

var flag = 0;

for (i = 2; i < inputNum; i++) {
    if (inputNum % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("Input number is prime");
} else
    console.log("number is not prime");