//Write code for function that takes three numbers as parameter and calculates average of the tree numbers and prints it out.
//In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function average (number1, number2, number3) {
    let average;
    average=(number1+number2+number3)/3;
    process.stdout.write(average.toString());
}
//Write code for a function discount(price, discountPercentage) that calculates discounted price based on price and discountPercentage.
function discount(price, discountPercentage) {
    let discount;
    discount=price*(1-discountPercentage*0.01);
    process.stdout.write(discount.toString());
 }
 //Write code for function area(width, height) that calculates the area of a rectangle and prints it out.
 function area(width, height) {
    let area;
    area=width*height;
    process.stdout.write(area.toString());

}
//Write code for a function shoppingList(numberOfGuests) for the following scenario: 
//There is going to be a party. Based on the number of participants, calculate the amounts of food and drink to be bought. 
//You will buy 3 sausages, 5 bottles of drink, 2 tomatoes and 1 egg for each guest. Define constants for the numbers of items for each guest. Print the shopping list as shown in the examples.
const NUMBER_OF_SAUSAGES_PER_PERSON = 3;
const NUMBER_OF_DRINKS_PER_PERSON =5;
const NUMBER_OF_TOMATOES_PER_PERSON =2;
const NUMBER_OF_EGGS_PER_PERSON =1;
function shoppingList(numberOfGuests) {
   sausages=NUMBER_OF_SAUSAGES_PER_PERSON*numberOfGuests;
   drinks=NUMBER_OF_DRINKS_PER_PERSON*numberOfGuests;
   tomatoes=NUMBER_OF_TOMATOES_PER_PERSON*numberOfGuests;
   eggs=NUMBER_OF_EGGS_PER_PERSON*numberOfGuests;
   process.stdout.write("* "+sausages.toString()+" sausages\n"+"* "+drinks.toString()+" drinks\n"+"* "+tomatoes.toString()+" tomatoes\n"+"* "+eggs.toString()+" eggs");
}
//Write code that sums values of variables number1 and number2 and prints the sum out.
function sum(number1, number2) {
    let sum;
    number1=Number(number1);
    number2=Number(number2);
    sum=number1+number2;
    process.stdout.write(sum.toString());

    
}