process.stdout.write("enter a number : ");
process.stdin.on("data", function(userinput)
{
    number = Number(userinput);
    tellnumber = number%2;
    if(tellnumber ==0 ){
        process.stdout.write("\n"+number+" is even .");
    }else{
        process.stdout.write("\n"+number+" is odd .");
    }
    process.exit();
});