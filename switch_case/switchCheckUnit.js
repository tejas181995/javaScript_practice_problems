var usrInput = require("readline-sync");
input = parseInt(usrInput.question("Enter a input: "));

switch (input) {
    case 1:
        console.log("Units for " + input + " is: Unit");
        break;
    case 10:
        console.log("Units for " + input + " is: Ten");
        break;
    case 100:
        console.log("Units for " + input + " is: Hundred");
        break;
    case 1000:
        console.log("Units for " + input + " is: Thousand");
        break;
  
    default:
        console.log("Enter a vilid input");
}