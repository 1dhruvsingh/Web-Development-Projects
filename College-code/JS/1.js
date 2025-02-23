// Problem 1: Basic Calculator
function calculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /, %):");
    let num2 = parseFloat(prompt("Enter second number:"));
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        default: alert("Invalid operator"); return;
    }
    alert("Result: " + result);
}

// Problem 2: Temperature Converter
function convertTemperature() {
    let temp = parseFloat(prompt("Enter temperature:"));
    let type = prompt("Enter conversion type (C/F):").toUpperCase();
    let converted;
    if (type === 'C') {
        converted = (temp - 32) * 5/9;
        alert("Converted Temperature: " + converted.toFixed(2) + "°C");
    } else if (type === 'F') {
        converted = (temp * 9/5) + 32;
        alert("Converted Temperature: " + converted.toFixed(2) + "°F");
    } else {
        alert("Invalid conversion type");
    }
}

// Problem 3: Even or Odd Checker
function checkEvenOdd() {
    let num = parseInt(prompt("Enter a number:"));
    console.log(num + " is " + (num % 2 === 0 ? "Even" : "Odd"));
}

// Problem 4: Print Multiplication Table
function multiplicationTable() {
    let num = parseInt(prompt("Enter a number:"));
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Problem 5: Reverse a String
function reverseString() {
    let str = prompt("Enter a string:");
    let reversed = str.split('').reverse().join('');
    console.log("Reversed String: " + reversed);
}

// Problem 6: Largest Number 
function findLargest() {
    let numbers = [23, 56, 12, 78, 91, 45];
    alert("Largest Number: " + Math.max(...numbers));
}

//Problem 7: Counting Vowels 
function countVowels() {
    let str = prompt("Enter a string:").toLowerCase();
    let count = (str.match(/[aeiou]/g) || []).length;
    alert("Number of vowels: " + count);
}

//Problem 8: Filtering even number 
function filterEvenNumbers() {
    let numbers = [10, 21, 32, 43, 54, 65];
    let evens = numbers.filter(num => num % 2 === 0);
    alert("Even Numbers: " + evens.join(', '));
}

// Problem 9: Capitalize Words 
function capitalizeWords() {
    let str = prompt("Enter a string:");
    let capitalized = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    alert("Capitalized String: " + capitalized);
}
