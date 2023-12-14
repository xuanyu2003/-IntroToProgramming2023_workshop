//Write code for function squareOrRectangle(width, height) that gets two numbers as parameters and based on them figures out whether the shape is a square or a rectangle and prints out 
//"Shape is square" 
//or
//"Shape is rectangle
//In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function squareOrRectangle(width, height) 
{
    // Your code goes here
    if ( width == height )
    {
        process.stdout.write("Shape is square");
    }else{
        process.stdout.write("Shape is rectangle");
    }
    
}
// Write code for a function calculateDiscount() that calculates a discount for a given price. Function takes one input parameter, price, and prints out the discounted price with two decimals. Discount percentages are dependent on the price according to the table below:
// Discounts
// Price (€)	Discount (%)
// < 50	0
// 51-100	10
// 101-500	20
// > 500	50
function calculateDiscount(price)
{
    // Your code goes here
        if(price<50)
        {
          process.stdout.write((price*1).toFixed(2));
        }
        if(price<101&&price>50)
        {
            process.stdout.write((price*0.9).toFixed(2));
        }
        if(price<501&&price>100)
        {
            process.stdout.write((price*0.8).toFixed(2));
        }
        if(price>500)
        {
            process.stdout.write((price*0.5).toFixed(2));
        }
        
    
}
// Write code for function smaller(number1, number2) that gets two numbers as parameters and prints out the smaller of the two.
// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function smaller(number1, number2) 
{
    // Your code goes here
   
    if(number2<=number1)
    {
      process.stdout.write(number2.toString());
    }
    else
    {
        process.stdout.write(number1.toString());
    }
}
//Write code for a function that checks whether given number is odd or even and prints out "[number] is even" or "[number] is odd"

// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function oddOrEven(number) 
{
    // Your code goes here
    let tellnumber;
    tellnumber = number%2;
    if(tellnumber ==0 )
    {
        process.stdout.write(number+" is even");
    }else
    {
        process.stdout.write(number+" is odd");
    }
}
// Write code for function that checks given number and prints out "Number is positive", "Number is negative" or "Number is zero" respectively.

// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function negativeOrPositive(number){
    // Your code goes here
    if(number==0){
        process.stdout.write("Number is zero");
    }
    if(number>0){
        process.stdout.write("Number is positive");
    }
    if(number<0){
        process.stdout.write("Number is negative");
    }
    
}