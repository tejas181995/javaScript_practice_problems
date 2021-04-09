var usrInput = require("readline-sync");
inputNumber = usrInput.question("Enter a inputNumber from 0-10000: ");

if ((inputNumber >= 0) && (inputNumber < 10))
    console.log("Units for "+ inputNumber + " is: Unit");
else if ((inputNumber >= 10) && (inputNumber < 100))
    console.log("Units for "+ inputNumber + " is: Ten");
else if ((inputNumber >= 100) && (inputNumber < 1000))
   console.log("Units for "+ inputNumber + " is: Hundred");
else if ((inputNumber >= 1000) && (inputNumber < 10000))
    console.log("Units for "+ inputNumber + " is: Thousand");
else
    console.log("Enter a vilid inputNumber from 0-10000");