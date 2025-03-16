const students = [
    { name: "Ali", marks: 45 },
    { name: "Ayesha", marks: 78 },
    { name: "Mahnoor", marks: 32 }
    
];

const passedStudents = students.filter(checkMarks);

function checkMarks(student) {
    return student.marks > 50;
}

console.log(passedStudents);
