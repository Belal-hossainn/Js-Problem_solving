// How would you extract the unique numbers in an array?

// using for loop
var arr = [5, 5, 8, 9, 6, 2, 3, 6, 3, 7];
var uniqueArray = [];
for(i = 0; i<arr.length; i++){
    var element = arr[i];
    var index = uniqueArray.indexOf(element);
        if( index == -1){
            uniqueArray.push(element);
        }
    
}
console.log(uniqueArray);

// Using array.filter() methods
const numbers = [2, 4, 6, 4, 5, 2, 3, 6, 9, 5,2];
const uniqueNumbers = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
});

console.log(uniqueNumbers);
