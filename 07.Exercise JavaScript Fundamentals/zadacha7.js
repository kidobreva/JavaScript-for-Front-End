let lines = ['3', '6', '5', '4', 'Stop', '10', '12'];

for (let i = 0; i < lines.length; i++) {
    if (lines[i] != 'Stop') {
        console.log(lines[i]);
    }

    else {
        break;
    }
}
