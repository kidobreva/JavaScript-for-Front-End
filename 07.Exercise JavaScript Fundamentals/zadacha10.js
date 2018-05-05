let commands = [
    'add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7'
];

let resultArray = [];

for (let command of commands) {
    let splittedCommands = command.split(' ');

    if (splittedCommands[0] === 'add') {
        resultArray.push(splittedCommands[1]);
    }

    else if (splittedCommands[0] === 'remove') {
        if (resultArray[splittedCommands[1]]) {
            resultArray.splice(splittedCommands[1]);
        }
    }
}

console.log(resultArray);