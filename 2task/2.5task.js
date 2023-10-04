process.stdout.write("Please enter three numbers : ");
process.stdin.on("data" , function(userinput)
{
    var number = userinput.toString();
    var numbers = number.split(" ");
    let number1 = parseInt(numbers[0]);
    let number2 = parseInt(numbers[1]);
    let number3 = parseInt(numbers[2]);
    if(number1==2||number2==2||number3==2)
    {
        process.stdout.write("You entered the magic number 2!")

    }
    else
    {

        if((number1==number2&&number2==number3))
        {
            process.stdout.write("You entered three matching numbers.");
        }
        if((number1 !=number2)&&(number2 !=number3)&&(number1!=number3))
        {
            process.stdout.write("You entered three different numbers.");
        }
        if ((number1 == number2)&&(number2 !=number3))
        {
            process.stdout.write("Third one doesnt fit .");
        }
    }
    process.exit();
    

});