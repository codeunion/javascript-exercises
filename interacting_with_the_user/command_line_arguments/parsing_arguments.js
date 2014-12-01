/*
// First use case: accessing command line arguments in node
console.log(process.argv);

// Run the following commands (lines starting with the command prompt `$`) in
// your terminal to verify that your code produces the output shown.
//
// (The $ is the command prompt. Don't type it!)
//
// $ node parsing_arguments.js
// ["node", "/path/to/parsing_arguments.js"]
//
// $ node parsing_arguments.js one 2 three
// ["node", "/path/to/parsing_arguments.js", "one", "2", "three"]
*/


/*
// Second use case: narrow down the results

var filename = ____.____[____];
var arguments = ____.____.slice(____);
console.log("The filename is " + filename);
console.log("The arguments are " + arguments.join(", "));

// Search suggestion: "select part of an array javascript"

// Run the following commands to verify that your code produces the output shown.
//
// $ node parsing_arguments.js
// ["node", "/path/to/parsing_arguments.js"]
// The filename is /path/to/parsing_arguments.js
// The arguments are
//
// $ node parsing_arguments.js one 2 three
// ["node", "/path/to/parsing_arguments.js", "one", "2", "three"]
// The filename is /path/to/parsing_arguments.js
// The arguments are one, 2, three
*/
