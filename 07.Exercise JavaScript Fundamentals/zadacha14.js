let strings = [
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
];

for (let string of strings) {
    let info = string.split(',');

    let object = JSON.parse(string);

    console.log('Name: ' + object.name);
    console.log('Age: ' + object.age);
    console.log('Grade: ' + object.date);
}

