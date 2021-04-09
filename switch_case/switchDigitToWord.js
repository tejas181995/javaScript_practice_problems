var usrInput = require("readline-sync");
inputNumber = parseInt(usrInput.question("enter the single digit inputNumber from 0-9: "));

switch (inputNumber) {
    case 0:
        console.log(inputNumber + " = Zero");
        break;
    case 1:
        console.log(inputNumber + " = One");
        break;
    case 2:
        console.log(inputNumber + " = Two");
        break;
    case 3:
        console.log(inputNumber + " = Three");
        break;
    case 4:
        console.log(inputNumber + " = Four");
        break;
    case 5:
        console.log(inputNumber + " = Five");
        break;
    case 6:
        console.log(inputNumber + " = Six");
        break;
    case 7:
        console.log(inputNumber + " = Seven");
        break;
    case 8:
        console.log(inputNumber + " = Eight");
        break;
    case 9:
        console.log(inputNumber + " = Nine");
        break;
    default:
        console.log("Enter a valid inputNumber from 0-9");
}