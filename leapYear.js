// How to check whether an year is a leap year or not?

//  Check Leap Year Using if...else

function isLeapYear(year){
    
    if( (year % 4 === 0  && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)){
        return `${year} is a leap year`;
    }
    else{
        return `${year} is not a leap year`;
    }

}
const result = isLeapYear(2024);
console.log(result)

// Check Leap Year Using newDate()
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = 2021;

checkLeapYear(year);