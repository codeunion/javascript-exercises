// Parsing command line arguments is a common task that there are libraries you
// can use to do it for you.
//
// Use the minimist package to finish the following exercise.
//
// Docs: https://www.npmjs.org/package/minimist
//
// Note: The script will figure out how to handle messages passed with _either_
// the `-m` or the `--message` flag.

var parseArgs = require("minimist");

var args = parseArgs(____.____.slice(2));

var from = ____[____];
var to = ____[____];
var message = ____[____] || ____[____];

console.log("Sending message from " + from + " to " + to);
console.log("==== body ====");
console.log(message);

// Run the following commands to verify that your code produces the output shown.
//
// $ node args.js -f Bugs -t Elmer --message "What's up doc?"
// Sending message from Bugs to Elmer
// ==== body ====
// What's up doc?
//
// $ node args.js -f "Apollo 13" -t Houston -m "We have a problem."
// Sending message from Apollo 13 to Houston
// ==== body ====
// We have a problem.
