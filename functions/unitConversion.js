const usrInput = require("readline-sync");

function toCelcius() {
    let quantity = parseInt(usrInput.question("Enter fahrenheit quiantity: "));
    let degreeInCelsius = (quantity - 32) * 5 / 9;
    console.log("fahrenheit quiantity in celsius: " + degreeInCelsius);
}

function toFahrenheit() {
    let quantity = parseInt(usrInput.question("Enter celsius quiantity: "));
    let degreeInFahrenheit = (quantity * 9 / 5) + 32;
    console.log("celsius quiantity in Fahrenheit: " + degreeInFahrenheit);

}

let choice = parseInt(usrInput.question("enter 1 to convert celsius to fahremheit and 2 to fahrenheit to celsius: "));

switch (choice) {
    case 1:
        toFahrenheit();
        break;

    case 2:
        toCelcius();
        break;

    default:
        console.log("Enter valid choice");
}