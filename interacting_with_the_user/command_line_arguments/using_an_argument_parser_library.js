// Parsing command-line arguments is a common task that there are libraries you
// can use to do it for you.
//
// Use the minimist package to finish the following exercise.
// Docs: https://www.npmjs.org/package/minimist
//
// Note: The script will figure out how to handle messages passed with _either_
// the `-m` or the `--message` flag.

var parseArgs = require('minimist');

var args = parseArgs(____.____.slice(2));

var from = ____[____];
var to = ____[____];
var message = ____[____] || ____[____];

console.log("Sending message from " + from + " to " + to);
console.log("==== body ====");
console.log(message);

// Run the following in your terminal to verify your code:
// (The $ is the terminal prompt. Don't type it!)
// $ node args.js -f bugs -t elmer --message "what's up doc?"
// Sending message from bugs to elmer
// ==== body ====
// what's up doc?
//
// $ node args.js -f "apollo 13" -t houston -m "we have a problem."
// Sending message from apollo 13 to houston
// ==== body ====
// we have a problem.
