# Command Line Arguments

When executing a program from the command line, most languages (including
JavaScript) provide a mechanism by which you can access the **arguments**
provided to the command.

The arguments to a command are the words provided after the command itself. In
the following example, `node` is the command, the first argument is `script.js`
and the second argument is `foo`.

```shell
$ node script.js foo # the $ is the shell prompt. Don't type it! # is a comment.
```

Solve the exercises to learn how to work with command line arguments in node.js.


## Let's Get Started

1. Review the [suggested order](00_SUGGESTED_ORDER.md).
1. Work through the exercises in the javascript files.
1. Submit a request for feedback!

### We don't need to re-invent this wheel

Parsing command-line arguments is such a common task that there are lots of
libraries you can use to do it for you. Can you use the
[minimist](https://www.npmjs.org/package/minimist) package to finish the
following exercise?

Note that the script will figure out how to handle messages passed with _either_
the `-m` or the `--message` flag.

```javascript
var parseArgs = require('minimist');

var args = parseArgs(__.__.slice(2));

var from = __[__];
var to = __[__];
var message = __[__] || __[__];

console.log("Sending message from " + from + " to " + to);
console.log("==== body ====");
console.log(message);

```

```shell
$ node args.js -f bugs -t elmer --message "what's up doc?"
# => should print:
# => Sending message from bugs to elmer
# => ==== body ====
# => what's up doc?

$ node args.js -f "apollo 13" -t houston -m "we have a problem."
# => should print:
# => Sending message from apollo 13 to houston
# => ==== body ====
# => we have a problem.
```

No search suggestion. Everything you need can be found in the [package
readme](https://www.npmjs.org/package/minimist#readme).

**Bonus**: can you modify the script so that if a user doesn't supply a message
flag, it will concatenate the word arguments into a message, like this:

```shell
$ node args.js -f "apollo 13" -t houston we have a problem
# => should print:
# => Sending message from apollo 13 to houston
# => ==== body ====
# => we have a problem.
```
