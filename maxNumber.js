// use math.max() methods
var x = 76;
var y = 87;
var z = 73;
var max = Math.max(x, y, z);
var min = Math.min(x, y, z);
console.log(max, min)

// to find max value from array
let arr = [1,2, -4, 6, 3, 0];
var result = Math.max.apply(Math, arr);
console.log(result)

// using spread operator
let number = [3, 5, 9, 4, 8, 7];
var maximum = Math.max(...number);
var minimum = Math.min(...number);
console.log(maximum, minimum);

// largest number from array using loop

var marks = [34, 47, 87, 67, 98, 56, 77];
var max = marks[0];
for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if( element > max){
        max = element;
    }
}
console.log(max)