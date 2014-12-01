// Let's do something a bit more interesting and useful with the input: we will
// write a rudimentary calculator that can solve basic arithmetic expressions.
//
// Complete the code required to make this calculator function as expected.
//
// Search suggestion: "convert string to number javascript"

var expression = ____.____[____].split(' ');

var firstNumber = ____(expression[0]);
var operator = expression[1];
var secondNumber = ____(expression[2]);

switch (operator) {
  case ____:
    console.log(firstNumber ____ secondNumber);
    break;
  case ____:
    console.log(firstNumber ____ secondNumber);
    break;
  case ____:
    console.log(firstNumber ____ secondNumber);
    break;
  case ____:
    console.log(firstNumber ____ secondNumber);
    break;
  default:
    console.log("ERROR. DOES NOT COMPUTE.");
    break;
}

// Run the following commands to verify that your code produces the output shown.
//
// $ node calculator.js "2 + 7"
// 9
//
// $ node calculator.js "10 - 3"
// 7
//
// $ node calculator.js "3 * 9"
// 27
//
// $ node calculator.js "1 / 5"
// 0.2
