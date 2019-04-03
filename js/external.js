"use strict";


// hello
console.log("Hello from external JavaScript");
// alert
alert("Welcome to my Website!");
// user's favorite color
var userInput = prompt("What is your favorite color?");
alert("Wow, really!? " + userInput + " is my favorite color too!");
console.log("Wow, really!? " + userInput + " is my favorite color too!");
// complete exercise 3 from previous lesson
alert("Our services provide classic movies for the low price of $3 per day. Please tell us how many days you rented each movie for! ");
// little mermaid
var userInput1 = prompt("How many days did you rent 'The Little Mermaid' for?");
alert("You spent $" + (userInput1 * 3) + " in total for 'The Little Mermaid'.");
console.log("You spent $" + (userInput1 * 3) + " in total for 'The Little Mermaid'.");
// brother bear
var userInput2 = prompt("How many days did you rent 'Brother Bear' for?");
alert("You spent $" + (userInput2 * 3) + " in total for 'Brother Bear'.");
console.log("You spent $" + (userInput2 * 3) + " in total for 'Brother Bear'.");
// hercules
var userInput3 = prompt("How many day(s) did you rent 'Hercules' for?");
alert("You spent $" + (userInput3 * 3) + " in total for 'Hercules'.");
console.log("You spent $" + (userInput3 * 3) + " in total for 'Hercules'.");
// their final cost into vars
var TLM = (userInput1 * 3);
var BB = (userInput2 * 3);
var H = (userInput3 * 3);
// checkout page
alert("In total, you spent $" + (TLM + BB + H) + ". Please proceed to checkout! We hope you enjoyed the movies!");
console.log("In total, you spent $" + (TLM + BB + H) + ". Please proceed to checkout! We hope you enjoyed the movies!");

