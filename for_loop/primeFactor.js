var usrInput = require("readline-sync");
inputNum = parseInt(usrInput.question("Enter number: "));


for(i = 2; i <= inputNum; i++){
    if(inputNum % i == 0){
        var flag = 0;
        for(j = 2; j*j <= i; j++){
            if(i%j == 0){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            console.log("prime factor is: " + i);
        }
    }
}