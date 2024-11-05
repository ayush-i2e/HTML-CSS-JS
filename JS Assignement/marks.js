const students = {
    Rahul: 80,
    Avanish:77,
    Divya: 88,
    Kamala: 95,
    Liz: 68
};

function calculateAvgGrade(students) {
    let totalMarks = 0;
    const grades = {};

    for (const [name, marks] of Object.entries(students)) {
        totalMarks += marks;

        if (marks < 60) {
            grades[name] = 'F';
        } else if (marks < 70) {
            grades[name] = 'D';
        } else if (marks < 80) {
            grades[name] = 'C';
        } else if (marks < 90) {
            grades[name] = 'B';
        } else {
            grades[name] = 'A';
        }
    }

    const average = totalMarks / Object.keys(students).length;

    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log('Grades:');
    for (const [name, grade] of Object.entries(grades)) {
        console.log(`${name}: ${grade}`);
    }
}

calculateAvgGrade(students);
