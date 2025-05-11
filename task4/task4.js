// 4. Functions and Scope (5 Marks) 

// Write a function in JavaScript that takes two parameters (numbers), multiplies them together, and returns the result. 

// a) Create a JavaScript function called calculateArea. 

// b) This function should take two parameters: length and width. 

// c) It should return the area of a rectangle. 

// d) Call this function with sample values and display the result. 

function calculateArea(length, width) {
    let lengthFloat = parseFloat(length);
    let widthFloat = parseFloat(width);

    if (isNaN(lengthFloat) || isNaN(widthFloat)) {
        console.log("Error: invalid type of length or width! Length: " + length + ", Width: " + width);
        return NaN;
    }

    if (lengthFloat < 0 || widthFloat < 0) {
        console.log("Error: length or width cant be negative!" + "Length: " + length + ", Width: " + width);
        return NaN;
    }

    return lengthFloat * widthFloat;
}

function printArea(area) {
    if (isNaN(area)) {
        return;
    }
    console.log("The Area is: " + area);
}

// tests normal case
let length = 10, width = 10;
console.log("'" + length + "' x '" + width + "' >>");
printArea(calculateArea(length, width));

// test invalid case
length = "Big";
width = 10;
console.log("'" + length + "' x '" + width + "' >>");
printArea(calculateArea(length, width));

length = 10;
width = "Small";
console.log("'" + length + "' x '" + width + "' >>");
printArea(calculateArea(length, width));

// test negative case
length = -1;
width = 10;
console.log("'" + length + "' x '" + width + "' >>");
printArea(calculateArea(length, width));

length = 10;
width = -1;
console.log("'" + length + "' x '" + width + "' >>");
printArea(calculateArea(length, width));
