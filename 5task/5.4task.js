var numarray =[55,23,6456,324,21,234,72,21];
process.stdout.write("number: ");
process.stdin.on("data", function(userinput)
{
    let input=Number(userinput);
    for (let i=0;i<numarray.length;i++)
    {
        if(input==numarray[i])
        {
            process.stdout.write("find number ");        

        }
    
    }

});