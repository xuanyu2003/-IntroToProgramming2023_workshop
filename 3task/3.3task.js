process.stdout.write("Please enter a string : ");
process.stdin.on("data",function(userinput)
{
    let sentence = userinput.toString().trim();
    var numberletter = 0;
    let allnum = sentence.length;
    do
    {
        console.log(numberletter+1+"."+` character  is '${sentence.charAt(numberletter)}'.`);
        numberletter++;
    }
    while(numberletter<allnum)
    process.exit();

});
