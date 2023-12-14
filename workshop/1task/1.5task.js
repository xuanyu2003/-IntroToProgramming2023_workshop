process.stderr.write("Please select what u want to do :"
+"\n1. Print hello "
+"\n2. Print current date"
+"\n0. End program.\n"
);
process.stdin.on("data" , function(userinput){
    var currentdate = new Date();
    var number = Number(userinput);
    switch(number)
    {
        case 1:
        process.stdout.write("hello world .");
        break;
        case 2:
        process.stdout.write(currentdate.toString());
        break;
        case 0:
        process.exit();
        default:
    }


});
