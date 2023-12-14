//TASK1.1

//ask user a number
process.stdout.write("This program is a computer game. Please,\ntype in a number : ");
process.stdin.on("data", function(input)
{
    // the user has typed in something.
    let number1= Number(input);
    //define the secret number
    let secretnumber;
    secretnumber=number1+1;
    // print out the number
    process.stdout.write("you typed in "+number1);
    process.stdout.write(" my number is "+secretnumber);
    //print out the result
    process.stdout.write("\nSorry, you lost. I won. The game is over. ");
    //exit program
    process.exit();
});
