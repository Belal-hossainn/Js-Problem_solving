// var fibo = [0,1]
// for (let i = 2; i <=10; i++) {
//     fibo[i]= fibo[i-1] + fibo[i-2];
    
// }
// console.log(fibo);

// using function
function fibonacci(n){
    var fibo = [0,1]
    for (let i = 2; i <=n; i++) {
        fibo[i]= fibo[i-1] + fibo[i-2];
        
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);

// get fibonacci number using recursive function
function fiboNumber(n){ 
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fiboNumber(n-1) + fiboNumber(n-2);
    }
}
const res = fiboNumber(8);
console.log(res);

// fibonacci series in array using recursive function
function fibonacciSeries(n){
    if(n === 1){
        return [0, 1];
    }
    else{
        var s = fibonacciSeries(n-1);
        // s.push(s[s.length -1] + s[s.length - 2]);
        // also this way
        var nextElement = s[n-1] + s[n-2];
        s.push(nextElement);
        return s;
    }
}
 var results = fibonacciSeries(10);
console.log(results);