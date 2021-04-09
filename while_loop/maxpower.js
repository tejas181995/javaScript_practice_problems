var usrInput = require("readline-sync");
maxPower = parseInt(usrInput.question("Enter max power: "));

var result = 0;
var i = 0;

while(result < 256 && i <= maxPower){
    result = Math.pow(2, i);
    console.log(result);
    i++;
}
