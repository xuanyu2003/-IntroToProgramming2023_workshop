//Write a function getStringLength() that takes a string as an input parameter and returns the length of given string.
function getStringLength(inputString) {
    return inputString.length;
}
//Write function getLongerString(string1, string2) that takes two strings as input parameters and return the longer one. If they are equally long, return the first one.
function getLongerString(string1, string2){
    var str1 = string1.length;
    var str2 = string2.length;
    if(str1>=str2)
    {
        return string1;
        
    }
    else{
        return string2;
    }
}
//Write function getLastFiveLetters() that takes one input parameter and returns last five letters of that string.
function getLastFiveLetters(inputString){
    if (inputString.length >= 5) {
        return inputString.slice(-5);
    } else {
        return inputString;
        
    }
    
    
}
//Write function censorA() that replaces all occurrences of the letter a with an asterisk and then returns the censored string.
function censorA(input) 
{

        return input.replace(/a/gi, '*');
        
}
//Write function stringToArray(text, divider) that converts a given string into an array. String is split based on the given divider.
function stringToArray(text, divider)
{
  return text.split(divider);
    
}