const usrInput = require("readline-sync");
let a = parseInt(usrInput.question("Enter value a :"));
let b = parseInt(usrInput.question("Enter value b :"));
let c = parseInt(usrInput.question("Enter value c :"));

console.log("a = " + a + ", b = " + b + ", c = " + c);

var expression_1 = (a + b * c);
var expression_2 = (a % b + c);
var expression_3 = (c + a / b);
var expression_4 = (a * b + c);


if (expression_1 > expression_2) {
    temp_max = expression_1;
    temp_min = expression_2;
}
else {
    temp_max = expression_2;
    temp_min = expression_1;
}
if (expression_3 > expression_4) {
    temp1_max = expression_3;
    temp1_min = expression_4
}
else {
    temp1_max = expression_4;
    temp1_min = expression_3
}

if (temp_max > temp1_max)
    console.log("maximum value is: "  + temp_max);
else
    console.log("maximum value is: " + temp1_max);

if (temp_min < temp1_min)
    console.log("minimum value is: " + temp_min);
else
    console.log("minimum value is " + temp1_min);