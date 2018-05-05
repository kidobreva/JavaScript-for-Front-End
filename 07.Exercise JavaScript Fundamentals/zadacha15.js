let strings = [
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
];

let object = {};

for (let string of strings) {
    let str = string.split(' -> ');
    let key = str[0].trim();
    let value = str[1].trim();

    object[key] = value;
}

let resultObject = JSON.stringify(object);
console.log(resultObject);



