let items = [
    'key value',
    'key eulav',
    'test tset'
];

let resultArray = [];

for (let item of items) {
    let splittedItems = item.split(' ');

    if (resultArray[splittedItems[0]] === undefined) {
        resultArray[splittedItems[0]] = [];
    }

    if (splittedItems[0]) {
        resultArray[splittedItems[0]].push(splittedItems[1]);
    }
    else {
        resultArray[splittedItems[0]] = 'None';
    }
}

console.log(resultArray['key']);