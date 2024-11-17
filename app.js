/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        console.log("The numbers are equal");
    }
}

console.log(maxOfTwoNumbers(10, 5));
console.log(maxOfTwoNumbers(5, 10));
console.log(maxOfTwoNumbers(5, 5));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age) {
    if (age >= 18) {
        return "Adult";
    } else if (age < 18) {
        return "Minor";
    } else {
        console.log("Invalid age");
    }
}

console.log(isAdult(21));
console.log(isAdult(17));
console.log(isAdult(18));
console.log(isAdult(-1));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
}

console.log(isCharAVowel('a'));
console.log(isCharAVowel('b'));
console.log(isCharAVowel('y'));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
function generateEmail(name, domain) {
    return `${name}@${domain}`;
}

console.log(generateEmail('johnsmith', 'example.com'));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log(greetUser('Sam', 'morning'));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxOfThree(17, 4, 9));
console.log(maxOfThree(4, 17, 9));
console.log(maxOfThree(4, 9, 17));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip(billAmount, tipPercentage) {
    console.log(`The tip is ${billAmount * (tipPercentage / 100)}`);
    return billAmount * (tipPercentage / 100);
}

console.log(calculateTip(50, 20));
console.log(calculateTip(100, 10));
console.log(calculateTip(150, 5));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        return (temperature - 32) * 5/9;
    } else if (scale === 'F') {
        return temperature * 9/5 + 32;
    } else {
        console.log("Invalid scale");
    }
}

console.log(convertTemperature(32, 'C'));
console.log(convertTemperature(32, 'F'));
console.log(convertTemperature(0, 'C'));
console.log(convertTemperature(0, 'F'));
console.log(convertTemperature(100, 'd'));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    } else {
        console.log("Invalid operation");
    }
}

console.log(basicCalculator(10, 5, 'add'));
console.log(basicCalculator(10, 5, 'subtract'));
console.log(basicCalculator(10, 5, 'multiply'));
console.log(basicCalculator(10, 5, 'divide'));
console.log(basicCalculator(10, 5, 'power'));
