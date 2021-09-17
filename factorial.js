// using for loop
function factorial(n){
    var factorial = 1;
for( i=1; i <= n; i++){
    factorial = factorial * i;
   
}
return factorial;
}
var result = factorial(7);
console.log(result)

// using while loop
var i = 1;
var factorials = 1;
while(i <= 10){
    factorials = factorials * i;
    i++;
}
console.log(factorials);

//  alternative way

function fact(number){
    for(i=10; i>= number; i--){
    factorialNumber = number * i;
    // console.log(i, factorialNumber);
    }
    return factorialNumber;
}
var results = fact(2);
console.log(results);

//  using recursive function (the function call itself)
function factoriall(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factoriall(n-1);
        /* how this work:
        5 * factoriall(4);
        5 * 4 *  factoriall(3);
        5 * 4 * 3 * factoriall(2);
        5 * 4 * 3 * 2 *  factoriall(1);
        5 * 4 * 3 * 2 * 1 (bcz when n = 1, it return 1)

        */
    }
}
var finalResult = factoriall(5);
console.log(finalResult);