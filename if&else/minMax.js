var maximum = 0, minimum = 1000

for (counter = 1; counter <= 5; counter++) {
    values = Math.floor(Math.random() * 899 + 100);
    console.log(values)
    if (values > maximum)
        maximum = values;
    if (values < minimum)
        minimum = values;
}
console.log("maximum: " + maximum);
console.log("minimum: " + minimum);