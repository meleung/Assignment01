/* eslint-disable no-unused-vars */
/* eslint-env browser */

// STEP 1
/*
// Convert the following identifiers to Camel Case notation:
// var some_month;
var someMonth;

// function the Month();
function theMonth() {
}

// var current-month;
var currentMonth;

// var summer_month;
var summerMonth;

// var MyLibrary-function
var myLibraryFunction;
*/

// STEP 2
/*
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// numeric literal expression
var numericLiteral = 3.14;

// string literal expression
var stringLiteral = "Hello world";

// Boolean literal expression
var booleanLiteral = true;

// null literal expression
var nullLiteral = null;
*/

// STEP 3
/*
// Give me two examples of complex / variable expressions.
// Example 1
var example1 = 30 / 2 - 12;

// Example 2
var example2 = "You may have " + example1 + " wishes.";
*/

// STEP 4
/*
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
var strFirstName;
var strLastName;
var strAddress;
var strCity;
var strState;
var iZipCode;
var iYourAge;
var strReferralSource;
var bMayWeContactYou;
*/

// STEP 5
/*
// Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.
var strFirstName;
strFirstName = "Matthew";
var strLastName;
strLastName = "Leung";
var strAddress = 642 + " " + "Evergreen Terrace";
var strCity = "Springfield";
var strState = "NA";
var iZipCode = 90210;
var iYourAge = 35;
var strReferralSource = "SDCE", bMayWeContactYou = false;
*/

// STEP 6
/*
// Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
var displayResult;
displayResult = 21 + " Jump Street";
window.console.log(displayResult);
*/

// STEP 7
/*
// Create two variables.
var part1, part2;

// For the first variable, add a Boolean and a string and display the coerced result.
part1 = true + " Lies";
window.console.log(part1);

// For the second variable, add a number and a Boolean and display the coerced result.
part2 = 8 + false;
window.console.log(part2);
*/

// STEP 8
/*
// Is the following string literal valid?
// var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
// No.

// If not, how would you fix it?
// An escape backslash is needed to ignore the apostrophe in "I'm".
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);
*/

// STEP 9
/*
// Create a variable that produces a null value in the console window.
var nullValue = null;
window.console.log(nullValue);

// Create a variable that produces an undefined value in the console window.
var undefinedValue;
window.console.log(undefinedValue);
*/

// STEP 10
/*
// Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
window.console.log(typeof String());
window.console.log(typeof Number());
window.console.log(typeof Boolean());
window.console.log(typeof {});
var undefinedValue;
window.console.log(typeof undefinedValue);
*/

// STEP 11
/*
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
window.alert("Hello " + "Matthew Leung" + ", welcome to the JavaScript class!");
*/

// STEP 12
/*
// Declare a variable called name and set it equal to your name.
var name = "Matthew Leung";

// Substitute your name in the previous alert string with the variable instead.
window.alert("Hello " + name + ", welcome to the JavaScript class!");
*/

// STEP 13
/*
// Declare a variable called course and set it equal to “JavaScript”.
var course = "JavaScript";

// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
var name = "Matthew Leung";
window.alert("Hello " + name + ", welcome to the " + course + " class!");
*/

// STEP 14
/*
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!
var course = "JavaScript";
var name = "Matthew Leung";
window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");
*/

// STEP 15
/*
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
var course = "JavaScript";
var name = window.prompt("Please enter your name");
window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");
*/

// STEP 16
/*
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
var name = window.prompt("Please enter your name");
var course = window.prompt("Which course are you taking?");
window.alert("Hello " + name + ".\nWelcome to the " + course + " class!");
*/

// STEP 17
/*
// Assign the value 10 to x on a new line.
var x;
x = 10;

// Assign the value 20 to y on a new line.
var y;
y = 20;

// Display the sum of those two numbers in the console window.
window.console.log(x + y);
*/

// STEP 18
/*
// Declare a variable called x and assign it a value of 20.
var x = 20;

// Add and assign 20 to that variable and display the result in the console window.
x += 20;
window.console.log(x);
*/

// STEP 19
/*
// Declare a variable called x and assign it a value of 20.
var x = 20;

// Multiply and assign 5 to that variable and display the result in the console window.
x *= 5;
window.console.log(x);
*/

// STEP 20
/*
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
var x = 20 % 3;

// Divide and assign 1 to that variable and display the result in the console window. 
x /= 1;
window.console.log(x);
*/

// STEP 21
/*
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
window.console.log(1 === 1 && 2 > 1);
*/

// STEP 22
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
window.console.log(1 === 0 || 2 <= 1);

// STEP 23
// STEP 24
// STEP 25