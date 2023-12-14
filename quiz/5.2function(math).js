//Write function circumferenceOfCircle() that calculates the circumference when radius is given and returns it.
function circumferenceOfCircle(input) 
{
    let radius = input;
    let circumference = input*2*3.141592653589793;
    return circumference;
    
}
//Write function divide(divident, divider) that takes two numbers as input parameters, the divident and divider, performs the division and returns the result with two decimals. 
//If inputs are invalid, return text "Invalid input".
function divide(dividend, divider) {
    if (typeof dividend !== 'number' || typeof divider !== 'number' || divider === 0) {
        return "Invalid input";
    }

    const result = (dividend / divider).toFixed(2);
    return result;
}
//Create a function findHighestGrade(grades) that takes an array as a parameter and returns the highest value in the array.
function findHighestGrade(grades) {
    if (grades.length === 0) {
        return "No grades provided";
    }

    let highestGrade = grades[0]; // Assume the first grade is the highest initially

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highestGrade) {
            highestGrade = grades[i]; // Update the highest grade if a higher one is found
        }
    }

    return highestGrade;
}
//Write a function positiveToNegative(number) that takes a number as an input parameter and if it is positive, converts it to a negative and returns the value.
function positiveToNegative(number) {
    if (typeof number !== 'number') {
        return "Invalid input";
    }

    if (number >= 0) {
        return -number; // Convert positive number to negative
    } else {
        return number; // Number is already negative or zero, return as it is
    }
}
//Write function areaOfSquare(side) that takes a length of a side as an input parameter and returns the area of a square. NOTE! 
//In this exercise, you are not allowed to use multiplication but a proper math method instead.
function areaOfSquare(side) {
    if (typeof side !== 'number' || side <= 0) {
        return "Invalid input";
    }

    // Calculate area using Math.pow() without using multiplication
    const area = Math.pow(side, 2);
    return area;
}
//Write function areaOfACircle(radius) that takes the radius of a circle and calculates the circle area and returns it with two decimals. 
//If input is invalid, return "Invalid input".
function areaOfACircle(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
        return "Invalid input";
    }

    // Calculate circle area and round it to two decimal places
    const area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
}