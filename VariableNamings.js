//When the name contains multiple words, camelCase is commonly used. 
//That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.
//What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. 
//They are regular symbols, just like letters, without any special meaning.

//These names are valid:

    let $ = 1; // declared a variable with the name "$"
    let _ = 2; // and now a variable with the name "_"

    alert($ + _); // 3

//Examples of incorrect variable names:

// let 1a; // cannot start with a digit

// let my-name; // hyphens '-' aren't allowed in the name

// Case matters
//Variables named apple and APPLE are two different variables

//Reserved names
//There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
//For example: let, class, return, and function are reserved.

//The code below gives a syntax error:

//let let = 5; // can't name a variable "let", error!
//let return = 5; // also can't name it "return", error!

//An assignment without use strict
//Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

//This is a bad practice and would cause an error in strict mode:

"use strict";

num = 5; // error: num is not defined

