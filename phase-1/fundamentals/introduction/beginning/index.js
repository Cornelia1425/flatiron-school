/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations (the name we give to our data)
// -> constants cannot be resigned

// one line comment

/*
multiline comment
*/

/**
 * developers note.
 */
const schoolName = "xxschool";
// ->  schoolName = "new", cannot do it because constant cannot be reassigned
console.log(schoolName)
let firstName;
firstName = "Yiran"
// firstName = "Connie"
console.log(firstName); // -> let can be reassigned, let can be assigned later


// ~ Types
// -> undefined, null*, boolean, number, string(single, double quotes, or backticks)

console.log(typeof(schoolName));

let thisis =null;
console.log(thisis);

const sunny = true;
const rainy = false;
console.log(sunny);
console.log(typeof(sunny));

const numBooks = 5.1;
console.log(typeof(numBooks));

// interpolation;
const topic = "javascript";
console.log(typeof(topic));
const sentence = `we have ${topic} books.`;
// concatenation - join multiple strings together;
console.log(sentence);
console.log(sentence + " Isn't that great?");


// ~ Objects
// -> definition, bracket/dot notation, stringify

// something has multiples values, something more complex; a collection of data artype, let assign names to this collection  
const cube = {
    volume: "8", //question: for key and value, does it matter whether we quote them?
    height: "2",
    width: "2",
    color: "white",
    "full-name": "Bob",
}
// dot notation
console.log(cube.volume);
console.log(cube.color);

cube.volume = 10;
console.log(cube.volume);
// bracket notation
console.log(cube["color"]);
console.log(cube["full-name"]);

console.log(JSON.stringify(cube));


// ~ Arrays
// -> definition, access, modification

// no names, just a list of items
const numbers = [3,5,6,8]; // just positional data, can only be called by position, no property name
// access
console.log(numbers[3]);
console.log(numbers.length);
console.log(numbers[2]);
numbers[2]= 10; // modify array
console.log(numbers[2]);


// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItSunny = true;
if (isItSunny) {
    console.log("It's sunny today!");
} else {
    console.log(":(")
}

const isItRainy = true;
if (isItRainy == false) {
    console.log("It's sunny today!");
} else if (isItSunny) {
    console.log("It's sunny.");
} else {
    console.log(":(");
}

//ternary
isItSunny ? console.log("Sunny!") :console.log("Not sunny!")

const greeting = isItSunny? "Sunny!" : "Not sunny!"
console.log(greeting);

// ~ Functions
// -> name, parameters, body, return, annotations

// console.log("Hello!");

// this is dev convention, collaborating with people. 
/**
 * Greets someone and a mood.
 * @param {string} name The person to greet
 * @param {string} mood The mood I am in
 * @returns 
 */

function sayHello(name, mood){
    //console.log("Hello, "+ name + "." + mood + "!");
    return "Hello, "+ name + ". I am " + mood + "!"; //return is the last going to run, nothing will run after this line
}

console.log(sayHello("Yiran", "happy"));


function addOne(number){
    return number+1;
}
console.log(addOne(9)+addOne(6));


// -> methods, forEach, callback functions, anonymous functions
console.log("Hellooo") //calling the log method of console
const names =["ab","bob","cis","dave"];

// passing a callback function into the array method forEach()
names.forEach(name => console.log("Hello, "+ name  + "!")); //this is a function

names.forEach((name, i) => console.log("Hello, "+ name + " " + i + "!")); //this is a function

// return gives you a value - doing enturn assigned to a value, no return, no value assigned


// ~ Scope
// -> global, local, closures, function hoisting
// from larger circle can go to smaller circles, local circles cannot go global circle

//localScope(); if declared here, hoisting, meaning invocation before declaration

firstName = "Cornelia";
console.log(firstName);

function localScope(){
    const localVariable = "im localscope"; // 1.cannot be access in global 2.
    console.log(localVariable);
    console.log(firstName);
    return localVariable;
}
localScope(); //call this function, so it run, and print. print is inside the function.
//console.log(localVariable);

/* function localScope2(){
    console.log(localScope2);
    console.log(localVariable);
    console.log(firstName);
}
 */


// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

//1
let numbersNew = [1,2,3,4];
function sum(numbersNew){
    let sumNumber=0;
    let i=0;
    while (i<numbersNew.length) { // if function only execute once
        sumNumber = sumNumber + numbersNew[i];
        i++;
    }
    return sumNumber;
}
sum(numbersNew); 
const num = sum(numbersNew);
console.log(num);


/*
let numbersNew = [1,2,3,4];
function sum(numbersNew){
    let sumNumber=0;
    for(let i=0; i<numbersNew.length; i++){
        sumNumber = sumNumber + numbersNew[i];
    }
    console.log(sumNumber)
    return sumNumber;
}
sum(numbersNew); */
// const num = sum(numbersNew);
// console.log(num);

//2
let numbersDouble = [1,2,3,4];
function double(numbersDouble){
    return numbersDouble*2;
}
numbersDouble.forEach(numbersDouble => console.log(double(numbersDouble)));

//3
let words = ["HAPPY", "KIND", "SIMPLE"];
//console.log(words);
function whisper(words){
    return words.toLowerCase();
}
words.forEach(words => console.log(words.toLowerCase()));