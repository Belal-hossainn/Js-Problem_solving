
// how to get random number between any two given number?


// get random number between min-number (included) and max-number (excluded)
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min ) + min);
  }
var result = getRandomNumber(1, 6);
console.log(result);


// get random number between min-number and max-number (both included)
function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}
var res = getRandomInteger(1, 6);
console.log(res);


// random numbers using for loop
for(i= 1; i < 10; i++){
    var output = Math.floor(Math.random() * 6);
   
}
console.log(output);