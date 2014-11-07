# Passing Functions to Functions

## Exercises

### Functions as inputs? What?

Can you get functions to return values from inside other functions?

```javascript
var animalToCatTranslator = function(sentence) {
  return sentence.gsub('animal', 'cat');
}

var animalToDogTranslator = function(sentence) {
  return sentence.gsub('animal', 'dog');
}

var favoriteAnimal = function(animalTranslator) {
  return animalTranslator("animals are the best!");
}

favoriteAnimal(__)
// should evaluate to "cats are the best"

favoriteAnimal(__)
// should evaluate to "dogs are the best"
```

Search suggestion: `pass function as argument to another function javascript`

> Functions are objects in JavaScript, which means that you can pass them as
> arguments to other functions (just make sure not to include the `()`!).

### Functions inside of functions can take their own arguments

Can you write functions with one parameter and then pass those functions to
_another_ function?

```javascript
var conservativeSpender = function(balance)  {
  return balance > 100;
};

var liberalSpender = function(balance) {
  return balance > 10;
};

var shouldIBuyThis = function(balance, spendingStrategy) {
  if ( spendingStrategy(balance) ) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!";
  }
}

shouldIBuyThis(20, __);
// should evaluate to "Nope! Gotta keep my savings up!"

shouldIBuyThis(20, __);
// should evaluate to "Sure! I've got the money!"

shouldIBuyThis(__, function(balance) {
  return balance > 1000;
});
// should evaluate to "Nope! Gotta keep my savings up!"

var horribleSaver = function(balance) {
  return balance > 0;
};

shouldIBuyThis(__, horribleSaver);
// should evaluate to "Sure! I've got the money!"

function smarterShouldIBuyThis(cost, balance, strategy) {
  var futureBalance = balance - cost;
   if ( __(futureBalance) ) {
    return "Sure! I've got the money!";
  } else {
    return "Nope! Gotta keep my savings up!"
  }
}

smarterShouldIBuyThis(50, 45, horribleSaver);
// should evaluate to "Nope! Gotta keep my savings up!"
```

### Calling a function more than once with callbacks

Can you figure out how the functions below work and solve the missing pieces?

```javascript
var doItThisManyTimes = function(numberOfTimes, callbackFunction) {
  for (var i = 0; i < numberOfTimes; i++) {
    callbackFunction();
  }
};

doItThisManyTimes(5, __() {
  __.__("wow!")
});
// should print
// wow!
// wow!
// wow!
// wow!
// wow!

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
