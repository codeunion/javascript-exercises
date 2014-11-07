# Command Line Arguments

When executing a program from the command line, most languages (including
JavaScript) provide a mechanism by which you can access the **arguments**
provided to the command.

The arguments to a command are the words provided after the command itself. In
the following example, `node` is the command, the first argument is `script.js`
and the second argument is `foo`.

```shell
$ node script.js foo
```

Solve the exercises to learn how to work with command line arguments in node.js.

**Note**: in order to solve the exercises below, you will need to copy your JS
code into a file called `args.js`. You can run this file with node by running
the command `node args.js` in your terminal.

## Exercises

### Show me the arguments

Can you figure out how to access the command line arguments given when running a
node script?

```javascript
console.log(__.__);
```

```shell
$ node args.js
# => should print:
# => ['node', '/path/to/args.js']

$ node args.js one 2 three
# => should print:
# => ['node', '/path/to/args.js', 'one', '2', 'three']
```

Search suggestion: `node.js show command line arguments`

### Narrow down the results

Can you fix the code below to print out the expected results?

```javascript
var filename = __.__[__];
var arguments = __.__.slice(__);
console.log("The filename is " + filename);
console.log("The arguments are " + arguments.join(', '));
```

```shell
$ node args.js
# => should print:
# => The filename is /path/to/args.js
# => The arguments are

$ node args.js one 2 three
# => should print:
# => The filename is /path/to/args.js
# => The arguments are one, 2, three
```

Search suggestion: `select part of an array javascript`

### Using arguments to make decisions

Often times command line arguments are used to determine what code to run. Can
you figure out how to complete the conditional so that it responds to each
command line argument appropriately?

```javascript
var animal = __.__[__];

if (animal === __) {
  console.log(__);
} else if (animal === __) {
  console.log(__);
} else if (animal === __) {
  console.log(__);
}
```

```shell
$ node args.js cow
# => should print:
# => mooooooo

$ node args.js dog
# => should print:
# => woof

$ node args.js fish
# => should print:
# => >() >() >()
```

### Perform operations on user input

Let's do something a bit more interesting and useful with the input: we will
write a rudimentary calculator that can solve basic arithmetic expressions.

Can you figure out how to complete the code required to make this calculator
function as expected?

```javascript
var expression = __.__[__].split(' ');

var firstNumber = __(expression[0]);
var operator = expression[1];
var secondNumber = __(expression[2]);

switch (operator) {
  case __:
    console.log(firstNumber __ secondNumber);
    break;
  case __:
    console.log(firstNumber __ secondNumber);
    break;
  case __:
    console.log(firstNumber __ secondNumber);
    break;
  case __:
    console.log(firstNumber __ secondNumber);
    break;
  default:
    console.log("ERROR. DOES NOT COMPUTE.");
    break;
}
```

```shell
$ node args.js "2 + 7"
# => should print:
# => 9

$ node args.js "10 - 3"
# => should print:
# => 7

$ node args.js "3 * 9"
# => should print:
# => 27

$ node args.js "1 / 5"
# => should print:
# => 0.2
```

Search suggestion: `convert string to number javascript`
