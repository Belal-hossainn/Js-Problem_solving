// find the largest name from the array.

// using for of loop:
function largestString(names){
    let largestName = '';
    for (name of names) {
        if(name.length > largestName.length){
            largestName = name;
        }
    }
    return [largestName, names.indexOf(largestName)];
}

const result = largestString(['Nazrul', 'Rabindranth', 'Shahadujjaman', 'Mosh', 'Rishad'])
console.log(result)        //[ 'Shahadujjaman', 2 ]


// using for loop:

function largestName(namesArr){
    let largestWord = namesArr[0];
    for(i = 0; i< namesArr.length; i++){
        if(namesArr[i].length > largestWord.length){
            largestWord = namesArr[i];
        }
    }
    return [largestWord, namesArr.indexOf(largestWord)];
}
console.log(largestName(['Aksah', 'Mosh', 'Mashrafi', 'sakib']))
//[ 'Mashrafi', 2 ]