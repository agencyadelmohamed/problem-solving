

//problem1    Check if a given number is less than or equal to 100     1

let number = 85;
if (number <= 100) {
    console.log("Number is less than or equal to 100");
} else {
    console.log("Number is greater than 100");
}


//problem1   Check if a given number is less than or equal to 100     2

let aNumber = prompt("Please enter a number:  ");

if (aNumber <= 100) {
    console.log("look at ! Number is less 99to 100");
} else {
    console.log("look at ! Number is greater than 100");
}







//problem2  Check the number of characters in text      1

let textMsg = "This is a sample text.";
if (textMsg.length > 100) {
    console.log("The string is long");
} else {
    console.log("The string is short");
}

//problem2  Check the number of characters in text      2

let text = prompt("Please enter your text message:");
let numberCharacters = text.length;
console.log("The number of characters in the text is: " + numberCharacters);







//problem3   Password validation      1

let pass = "123456";
let confirmPass = "123456";
if (pass === confirmPass) {
    console.log("The Password is valid");
} else {
    console.log("The Password is not valid");
}







//problem4   Check the day of the week if Saturday      1

let day = "Saturday ";
if (day === "Saturday ") {
    console.log(day + " It's weekend");
} else {
    console.log("It's a work day");
}


//problem4   Check the day of the week if Saturday   2
let today = prompt("Please enter the day of the week:");

console.log(today === "Sat" ? "It's weekend" : "It's a work day");









//problem5   Check if the number is positive or negative

//let num = 10;

let num = prompt("Please enter the  number :");

if (num > 0) {
    console.log(num + "The number is positive");

} else if (num === 0) {
    console.log(num + "The number is zero");
} else {
    console.log(num + "The number is negative");
}










//problem6  Verifying academic grade

let grade = 75;

if (grade < 50) {
    console.log("F");
}
else if (grade < 60) {
    console.log("D");
}
else if (grade < 70) {
    console.log("C");
}
else if (grade < 80) {
    console.log("B");
}
else {
    console.log("A");
}






//problem7  Check temperature
let temperature = 35;
if (temperature > 30) {
    console.log("It's hot");
}
else {
    console.log("It's cold");
}






//problem8  Check if the number is odd or even
let Number = 4 ;
if (Number % 2===0) {
    console.log("the number eveeeen");
}
else {
    console.log("The number  ooodd");
}






//problem9  Check if an odd or even number is greater than

let Num = 22;
if (Num % 2 === 0 && Num > 20) {
    console.log("You can enter the university");
} 
else {
    console.log("You can't enter");
}

