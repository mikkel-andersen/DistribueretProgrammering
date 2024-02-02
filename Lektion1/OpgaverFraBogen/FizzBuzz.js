let count = 1;
while (count < 100) {
    if (count % 3 == 0) {
        console.log("Fizz")
        count++;
    }
    if (count % 5 == 0 && count % 3 != 0) {
        console.log("Buzz")
        count++;
    } else {
    console.log(count);
    count++;
    }
}