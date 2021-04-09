var usrInput = require("readline-sync");
inputNum = parseInt(usrInput.question("enter the inputNum from 1-7: "));

switch (inputNum) {
    case 1:
        console.log(inputNum + " = Sunday");
        break;
    case 2:
        console.log(inputNum + " = Monday");
        break;
    case 3:
        console.log(inputNum + " = Tuesday");
        break;
    case 4:
        console.log(inputNum + " = Wednesday");
        break;
    case 5:
        console.log(inputNum + " = Thursday");
        break;
    case 6:
        console.log(inputNum + " = Friday");
        break;
    case 7:
        console.log(inputNum + " = Saturday");
        break;
    default:
        console.log("Enter a vilid inputNum from 1-7");
}