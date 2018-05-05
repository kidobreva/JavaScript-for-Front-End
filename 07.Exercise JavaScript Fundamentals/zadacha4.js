function counter(count) {

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] < 0) {
            count++;
        }
    }

    if (count % 2 == 0) {
        return true;
    }

    else {
        return false;
    }

}

let numbers = ['2', '3', '-1'];

if (counter(true)) {
    console.log("Negative");
}

else {
    console.log("Positive");
}
