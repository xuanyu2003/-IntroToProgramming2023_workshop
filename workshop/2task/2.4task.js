process.stdout.write("Are you younger than 18 ?\nPlease answer Y or N : ");
process.stdin.on("data", function(userinput){
    let answer = userinput.toString();
    if(answer == 'y' ||answer == 'n' ||answer =='Y' ||answer =='N' ){
        process.stdout.write("You are grown up");
    }
    else
    {
        process.stdout.write( answer +" is not a vaild answer .");

    }
    process.exit();
});


