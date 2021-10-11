// how to remove falsy value from array.

const mixedArray = ['Rishad', undefined, 10, NaN, null, 'k10', false, 'apple', '', true];

const trueArray = mixedArray.filter(function(el){
    if(el){
        return true;
    }
});
console.log(trueArray);
//[ 'Rishad', 10, 'k10', 'apple', true ]

//alternative solution: using Boolean()

const trueArr = mixedArray.filter(Boolean);
console.log(trueArr)   //[ 'Rishad', 10, 'k10', 'apple', true ]