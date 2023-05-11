//To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';

//Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

//When a programmer is sure that a variable will never change, 
//they can declare it with const to guarantee and clearly communicate that fact to everyone.

//Uppercase constants

//There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

//Such constants are named using capital letters and underscores.

//For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

//Benefits:

//COLOR_ORANGE is much easier to remember than "#FF7F00".
//It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
//When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.
//When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

//Being a “constant” just means that a variable’s value never changes. 
//But there are constants that are known prior to execution (like a hexadecimal value for red) 
//and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment.

//For instance:

const pageLoadTime = /* time taken by a webpage to load */;
//The value of pageLoadTime is not known prior to the page load, so it’s named normally. 
//But it’s still a constant because it doesn’t change after assignment.

//In other words, capital-named constants are only used as aliases for “hard-coded” values.