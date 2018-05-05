function multiplyOrDevideNumbers(numbers) {
    if (numbers[1] >= numbers[0])
        {
            return Number(numbers[0]) * Number(numbers[1]);
        }

    return Number(numbers[0]) / Number(numbers[1]);

}

let numbers = ['144', '12'];
console.log(multiplyOrDevideNumbers(numbers));