//ask number from user
process.stdout.write("This program converts miles to kilometers.\n Please, give a distance in miles: ");
//store this number
process.stdin.on("data", function(input)
{
    let number1=Number(input);
    //create another number which calculate kilometer
    let number2;
    //get kilometernumber
    number2=number1*1.6093;
    //print out results
    const util=require("util");
    process.stdout.write(util.format("%d miles is %d kilometers.\n",
    number1,
    number2));
    //exit program
    process.exit();

});
