console.log("Think of number between 1-100 and answer the following question ");
const usrInput = require("readline-sync");

let start = parseInt(0);
let end = parseInt(100);
let mid = parseInt(0);

while( Math.ceil((start + end) / 2 ) != mid ){
    let temp = start + end;
    mid = Math.ceil(temp / 2);
    var ans = parseInt(usrInput.question("is number greater than "+ mid + " "+ "(y/n) = (1/0)"));
    if(ans == 1){
        start = ((mid + 1));
    }else{
        end = ((mid));
    }

}
console.log("your number is: " + mid);