//ask user for number
process.stdout.write("Please enter a number: ");
process.stdin.on("data", function(input)
{
    let number; 
    number=Number(input);
    //define a secret number
    let secretnumber;
    secretnumber=7;
    let add,minus,multply,divide;
    add=number+secretnumber;
    minus=number-secretnumber;
    multply=number*secretnumber;
    divide=number/secretnumber;
    let number1=number;
    number1++;
    let number2=number;
    number2--;
    //print out the result
    process.stdout.write(number+"+"+secretnumber+"="+add+"\n");
    process.stdout.write(number+"-"+secretnumber+"="+minus+"\n");
    process.stdout.write(number+"*"+secretnumber+"="+multply+"\n");
    process.stdout.write(number+"/"+secretnumber+"="+divide+"\n");
    process.stdout.write(number+"++"+"="+number1+"\n");
    process.stdout.write(number+"--"+"="+number2+"\n");
    //exit the process
    process.exit();

});








