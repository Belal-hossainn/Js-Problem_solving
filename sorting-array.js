// 1. How can we alphabetically order an student's name array?

const students = ['Rishad', 'Rifat', 'Aman', 'Nahid', 'Farzad', 'Sadia'];
students.sort();
console.log(students);

// 2.How can you order roll numbers of students in your class sequentially?

const rollNumber = [5, 12, 3, 9, 10, 7, 1, 4];
rollNumber.sort(function(a, b){
    return a-b;
});
console.log(rollNumber);


// sorting arrays of object

const  employee = [
    { name: 'Edward', id: 21 },
    { name: 'Sharpe', id: 37 },
    { name: 'Aman', id: 45 },
    { name: 'Thomas', id: 12 },
    { name: 'Nishat', id: 13 },
      ];

  const result = employee.sort(function (a, b) {
    return a.id - b.id;
  });
  console.log(result);


