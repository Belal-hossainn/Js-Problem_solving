// How would you count words of a sentence in JavaScript?

var word = "Hi i am a ghost of ghost land.";
var count = 0;
for(i = 0; i< word.length; i++){
    var char = word[i];
    if( char == " " && word[i-1] != " "){
        count++
    }
    
}
count++
console.log(count);