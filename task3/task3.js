// 3. Loops and Arrays (5 Marks) 

// Write a JavaScript program that demonstrates the use of a for loop. 

// a) Create an array named fruits that contains four different fruit names. 

// b) Use a for loop to iterate through each element in the array. 

// c) Log each fruit name to the console. 

const fruits = [
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
];

console.log("List of fruits:")
for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    console.log("・" + fruit);
}