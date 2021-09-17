// How to calculate total marks from an array holding marks of different subjects? 

// using for loop

function getTotalMarks(arr){
    var sum = 0;
    for(i = 0; i < arr.length; i++){
        var element = arr[i];
        sum = sum + element;
    }
    return sum;
}
console.log(getTotalMarks([34,68,91, 55, 87]));

// using array.reduce() method

const numbers = [55, 65, 45, 93, 84, 58];
let totalMarks = numbers.reduce(getTotal);

function getTotal(total, value){
    return total + value;
};

console.log(totalMarks);