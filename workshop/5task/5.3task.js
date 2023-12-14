let numbers = [];

while (true) {
  let input = prompt("Enter a number (or a letter to quit):");

  // Check if the input is a number
  if (!isNaN(input)) {
    // Convert the input to a number and push it into the 'numbers' array
    numbers.push(parseFloat(input));
  } else {
    // If the input is not a number, break out of the loop
    break;
  }
}

if (numbers.length > 0) {
  // Calculate the sum using the 'reduce' method and then calculate the average
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  alert(`The average of the entered numbers is: ${average}`);
} else {
  alert("No valid numbers entered.");
}
