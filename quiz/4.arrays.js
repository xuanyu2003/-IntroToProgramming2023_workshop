//Write code for a function that gets an average of item values in a given array and prints it out.
function average(array) 
{
    // Your code goes here
    var sum = 0;
    var de = array.length;
    for(let i = 0;i<de;i++)
    {
        sum =sum+array[i];
        
    }

    let average =sum/de;
    process.stdout.write(average.toString());
    
}
//Write code for a function that prints out the fifth item in an array given as a parameter.
function getFifthItem(array){
    // Your code goes here
    process.stdout.write(array[4].toString());
}
//Write code for a function that gets the highest and lowest of item values in a given array and prints them out
//"[highest] is highest and [lowest] is lowest."
function highestAndLowest(array) {
    // Your code goes here
    array.sort((a,b)=>b-a);
    process.stdout.write(array[0].toString()+" is highest and ");
    array.sort((a,b)=>a-b);
    process.stdout.write(array[0].toString()+" is lowest");
}
//Write code for a function that creates a simple array with the following items: Audi, Lada, Toyota, Ferrari and prints out each element on a new line.
function simpleArray() {
    // Your code goes here
    array =["Audi", "Lada","Toyota", "Ferrari"];
    for (let i =0 ; i< array.length;i++)
    {
        process.stdout.write("\n"+array[i].toString());
        
    }
}
//Write code for a function that gets an multidimensional array as an input parameter and prints out the item that is found on the third column of the second row.
function getItem23(matrix) {
    // Your code goes here
    process.stdout.write(matrix[1][2].toString());
}
