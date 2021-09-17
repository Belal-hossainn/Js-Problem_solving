// Write a function to check whether is a number is a prime number or not.

function isPrime(n){
    for (let i = 2; i < n; i++) {
        if( n%i == 0){
            return 'Not a prime number';
        }
        
    }
    return ' prime number';
}

const result = isPrime(23);
console.log(result);

function isPrime(num) { // returns boolean
    if (num <= 1) return false; // negatives
    if (num % 2 == 0 && num > 2) return false; // even numbers
    const s = Math.sqrt(num); // store the square to loop faster
    for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
        if(num % i === 0) return false; // modulus shows a divisor was found
    }
    return true;
  }
  console.log(isPrime(3));