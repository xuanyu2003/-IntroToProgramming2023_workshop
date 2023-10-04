process.stdout.write("number:");
process.stdin.on("data", function(input)
{
    var length=input;
    for(let i =0;i <= length;i++)
    {
        process.stdout.write("\n");

        for(let u =0;u <= i;u++)
        {
            process.stdout.write("*");

        }

        
    }


});