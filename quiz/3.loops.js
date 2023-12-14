//Write a function every5thNumber() that prints out every 5th number from the range 0-100 in a loop.
function every5thNumber()
{
    // Your code goes here
    for(let i =0; i<=100;i=i+5)
    {
        console.log(i);
    }
}
//Create a function countDigits() that counts the number of digits in a given number and returns the number of digits. 
function countDigits(number)
{
    let count=number.toString().length;
    return count;
}
// Write code for a function that gets three parameters: firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), month and numberOfDays and will then print out each date accompanied by the weekday name
// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function calendar(firstWeekDay, month, numberOfDays) 
{
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      let currentDay = firstWeekDay - 1;
      for (let day = 1; day <= numberOfDays; day++) 
      {
          console.log(`${weekdays[currentDay]} ${day}.${month}.`);
           currentDay = (currentDay + 1) % 7;
          
      }
    
}
// Write a function everyNthNumber(number) that takes a number as an input parameter and then prints out every nth number from the range 0-100 in a loop. If parameter is zero or negative, print out "Invalid input".
function everyNthNumber(number)
{

    if (number > 0)
    {
      for(let i = 0 ; i <= 100; i=i+number)
      {
        console.log(i);
      }
        
    }
    else
    {
        process.stdout.write("Invalid input");
        
    }
    
    
    
}
// Write code for a function that gets three parameters: firstWeekDay (a number, 1 meaning Monday, 2 for Tuesday etc.), month and numberOfDays and will then print out each date accompanied by the weekday name. Each week is on a new line.

// In this task you can assume input to be of correct data type (numeric) and error handling is not necessary.
function calendar(firstWeekDay, month, numberOfDays) {
    // Your code goes here
     const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

      let currentDay = firstWeekDay - 1;
      for (let day = 1; day <= numberOfDays; day++) 
      {
           if(currentDay==6)
           {
               process.stdout.write(`${weekdays[currentDay]} ${day}.${month}. `);
               process.stdout.write("\n");
           }
           else{
                process.stdout.write(`${weekdays[currentDay]} ${day}.${month}. `);
           }
           
           currentDay = (currentDay + 1) % 7;
           
      }
    

    
}