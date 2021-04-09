var usrInput = require("readline-sync");
inputQuantity = parseInt(usrInput.question("Enter a input quantity: "));
choice = parseInt(usrInput.question("Enter a input: \n1.feet to inch \n2. inch to feet \n3.feet to meter\n4. meter to feet"));

switch (choice) {
    case 1:
        console.log("input quantity in inches is: " + inputQuantity * 12.0);
        break;
    case 2:
        console.log("input quantity in feet is: " + inputQuantity / 12.0);
        break;
    case 3:
        console.log("input quantity in meter is: " + inputQuantity * 0.3048);
        break;
    case 4:
        console.log("input quantity in feet is: " + inputQuantity / 0.3048);
        break;
    default:
        console.log("enter valid choice");
}