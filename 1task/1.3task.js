// ask user a number
process.stdout.write("This program converts meters to other units of distance.. Please, enter a distance in meters: ");
process.stdin.on("data", function(input)
{
    let number;
    number=Number(input);
    //convert number
    let kilonum,milesnum,yardsnum,feetnum,inchesnum,lightyearsnum;
    kilonum=number*0.001;
    milesnum=number*0.0005;
    yardsnum=number*1.093;
    feetnum=number*3.281;
    inchesnum=number*39.370;
    lightyearsnum=number*9.461*1000000000000000.00;
    //show the result
    const util=require("util");
    process.stdout.write(util.format("%d meters is\n%d kilometers.\n%d miles\n%d yards\n%d feet\n%d inches\n%d light years",
    number.toFixed(3),
    kilonum.toFixed(3),
    milesnum.toFixed(3),
    yardsnum.toFixed(3),
    feetnum.toFixed(3),
    inchesnum.toFixed(3),
    lightyearsnum.toFixed(3)));
    //excit program
    process.exit();

});