//ask usef for two numbers
process.stdout.write("enter three numbers: ");
process.stdin.on("data", function(userinput1)
{ 
    var numbers=userinput1.toString().split(" ");   
    number1 = Number(numbers[0]); 
    number2 = Number(numbers[1]);
    number3 = Number(numbers[2]);
    var largernumber; 
    if (number1>number2) 
    {
        largernumber = number1;   
    }   
    else 
    {
        largernumber = number2;
    
    }
    if(number3>largernumber)
    {
        largernumber = number3;
    }
    process.stdout.write( "\n The largest number is "
    +  largernumber  +  ".\n\n" ) ;

    process.exit();
});