# Passing Functions to Functions

## Exercises

### Functions as inputs? What?

Can you get functions to return values from inside other functions?

```javascript
var runThisFunction = function(otherFunction) {
  return otherFunction();
}

runThisFunction(function() {
  __ "I'm a string!";
});
// should evaluate to "I'm a string!"

var returnTrue = __() {
  __ __;
};

runThisFunction(returnTrue);
// should evaluate to true
```

Search suggestion: `return value from function javascript`

> Functions are objects in JavaScript, which means that you can pass them as
> arguments to other functions (just make sure not to include the `()`!).

### Functions inside of functions can take their own arguments

Can you write functions with one parameter and then pass those functions to
_another_ function?

```javascript
var showMyBalance = function(messageFunction) {
  var balance = 729;
  console.log( __(balance) );
}

var accountMessage = __(balance) {
  return "You have " + String(balance) + " dollars in your account";
}

showMyBalance(__);
// should print "You have 729 dollars in your account"

showMyBalance(function(__) {
  if (__ < 100) {
    return "You're running low on funds";
  } else {
    return __;
  }
});
// should print "You're doing ok."
```

Search suggestion: `named vs anonymous functions javascript`

### Calling a function more than once with callbacks

Can you figure out how the functions below work and solve the missing pieces?

```javascript
var each = function(array, callbackFunction) {
  for (var i = 0; i < array.length; i++) {
    callbackFunction(array[i]);
  }
}

each([1,2,3], function(number) {
  console.log(__ * 2);
});
// should print
// 2
// 4
// 6

var printQs = __(__) {
  console.log('Q' * __);
}

each([1,2,3], printQs);
// should print
// Q
// QQ
// QQQ
```

Search suggestion: `callback function javascript`

> When you need to perform the some operation many times within a function,
> using a callback is an effective tool.

### Use the return value of your callbacks

Can you figure out how to write callback functions that give values back to
their "caller"?

```javascript
var map = function(array, callbackFunction) {
  var mappedArray = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    mappedArray.push( __(item) );
  }
  return __;
}

map(["one", "two", "three"], __(__) {
  __ __.toUpperCase();
});
// should evaluate to ["ONE", "TWO", "THREE"]

var square = function(__) {
  __ __ * __;
};

map([4, 5, 10], square);
// should evaluate to [16, 25, 100]
```

> Pay close attention to the names of functions and their parameters.

### Doing comparisons in functions is useful for control flow

Can you figure out how the `filter` function works and write callbacks to filter
out certain elements from arrays?

```javascript
var filter = function(array, __) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if ( __(array[i]) === true ) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

filter([5, -2, 19, -8], function(number) {
  return __ __ 0;
});
// should evaluate to [5, 19] (numbers greater than 0)

var startsWithA = __(__) {
  __ __.charAt(0).toUpperCase() === 'A'
}

filter(["apple", "aardvark", "zoo", "arch", "goggles"], startsWithA);
// should evaluate to ["apple", "aardvark", "arch"]
```

> Conditionals are expressions that return boolean values. Functions can return
> an evaluated expression. Therefore...
