let students = [
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
];

for (let student of students) {
    let studentInfo = student.split(' -> ');

    let studentObject = {
        name: studentInfo[0],
        age: studentInfo[1],
        grade: studentInfo[2]
    }

    console.log('Name: ' + studentObject.name);
    console.log('Age: ' + studentObject.age);
    console.log('Grade: ' + studentObject.grade);
}


