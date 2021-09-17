// How would you reverse string in a sentence?

function reverseString( str){
    var reverse = '';
    for(i=0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var result = reverseString('You may say I am a dreamer.');
console.log(result);

