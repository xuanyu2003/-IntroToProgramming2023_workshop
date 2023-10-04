const { parseArgs } = require("util");
process.stdout.write("Ask the user to give a string and then check if it’s a palindrome : ");
process.stdin.on("data",function(userinput)
{
    let palindromecheck=userinput.toString().trim();
    let allchara= palindromecheck.length;
    var allchara1=Number[allchara];
    let i =0;
    let letter1 =parseArgs[i];
    let letter2 =parseArgs[allchara1-i];
    let count =0;
    for(i;i<= allchara1;i++)
    {
        if(letter1==letter2)
        {
            count ++;
            if(count==allchara1)
            {
                process.stdout.write("it’s a palindrome");
            }
    
        }
    
    }
});
/*
3.6 Task 6: Palindrome
Ask the user to give a string and then check if it’s a palindrome (a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run) or not. Use loops to solve this.
*/

// Prompt the user for a string
process.stdout.write("\n\nPlease enter a string to check if it's a palindrome\n");

// Let's read user input
process.stdin.on("data", function(inputFromUser){
    // Create a variable for user input, make it a string and trim unwanted whitespace
    let stringToCheck = inputFromUser.toString().trim().toLowerCase();
    // Create an iterator variable
    let i = 0;
    // Create a flag for checking
    let palindromeOk = true;

    // Loop through string
    while(i < (stringToCheck.length - i) && palindromeOk) {
        // Check if current letter is the same as the letter in the same position counting from end
        if(stringToCheck.charAt(i) != stringToCheck.charAt(stringToCheck.length - 1 - i)) {
            palindromeOk = false;
        }
        i++;
    }
    // Is the word palindrome i.e. is the flag palindromeOk still true
    if (palindromeOk) {
        process.stdout.write("Word " + inputFromUser.toString().trim() + " is a palindrome\n\n");
    } else {
        process.stdout.write("Word " + inputFromUser.toString().trim() + " is NOT a palindrome\n\n");
    }
    // Terminate program
    process.exit();
})