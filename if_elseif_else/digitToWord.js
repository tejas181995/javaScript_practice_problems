var usrInput = require("readline-sync");
input = usrInput.question("enter the single digit input from 0-9: ");

if (input == 0)
    console.log(input + " = Zero");
else if (input == 1)
    console.log(input + " = One");
else if (input == 2)
    console.log(input + " = Two");
else if (input == 3)
    console.log(input + " = Three");
else if (input == 4)
    console.log(input + " = Four");
else if (input == 5)
    console.log(input + " = Five");
else if (input == 6)
    console.log(input + " = Six");
else if (input == 7)
    console.log(input + " = Seven");
else if (input == 8)
    console.log(input + " = Eight");
else if (input == 9)
    console.log(input + " = Nine");
else
    console.log("Enter a valid number from 0-9");