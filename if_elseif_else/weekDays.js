var usrInput = require("readline-sync");
input = usrInput.question("enter the input from 1-7: ");

if (input == 1)
    console.log(input + " = Sunday");
else if (input == 2)
    console.log(input + " = Monday");
else if (input == 3)
    console.log(input + " = Tuesday");
else if (input == 4)
    console.log(input + " = Wednesday");
else if (input == 5)
    console.log(input + " = Thursday");
else if (input == 6)
    console.log(input + " = Friday");
else if (input == 7)
    console.log(input + " = Saturday");
else
    console.log("Enter a vilid number from 1-7");