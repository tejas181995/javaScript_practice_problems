var usrInput = require("readline-sync");
inpunNum = parseInt(usrInput.question("Enter a inpunNum: "));
harmonic = 0;
for (denominator = 1; denominator <= inpunNum; denominator++) {
    harmonic += 1/denominator;
}
console.log(harmonic);