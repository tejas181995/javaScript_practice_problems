var date1 = new Date(3, 20);
var date2 = new Date(6, 20);

const usrInput = require('readline-sync');

var day = usrInput.question("enter day");
var month = usrInput.question("enter month");

var date = new Date(month, day);

if (date1 < date && date < date2){

    console.log(true);
}else
    console.log(false);