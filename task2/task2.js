// 2. Conditional Statements in JavaScript (5 Marks) 

// Write a JavaScript program that uses if-else and switch statements to make decisions based on user input. 

// a) Prompt the user to enter a number and store it in a variable. 

// b) Write an if-else statement to check if the number is positive, negative, or zero. 

// c) Display the appropriate message based on the condition. 

var prompt = require('prompt-sync')();

var number = parseFloat(prompt("Please enter a number: "));

let message = "";
if (number > 0) {
    message = "You've entered a positive number.";
} else if (number < 0) {
    message = "You've entered a negative number.";
} else if (number === 0) {
    message = "You've entered zero.";
} else {
    message = "You've entered an invalid number."
}

console.log("If-else statement check Result: " + message);

// Using switch
switch (true) {
    case (number > 0):
        message = "You've entered a positive number.";
        break;
    case (number < 0):
        message = "You've entered a negative number.";
        break;
    case (number === 0):
        message = "You've entered zero.";
        break;
    default:
        message = "You've entered an invalid number."
}

console.log("Switch statement check Result: " + message);