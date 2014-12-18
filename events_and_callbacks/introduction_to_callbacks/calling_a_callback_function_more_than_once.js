// 1. Scroll to the bottom to get to the use cases.
// 2. Uncomment the next use case and make it work. Frequently this means replacing
//    `____`s with code of your own.
// 3. Verify it works by running the file with the `node` command line program.
// 4. Repeat until all use cases are functioning.

// This function checks if the contents of an array are equal to one another.
// Why? Because `["hi"] === ["hi"]` is false in JavaScript. Le-sigh.
var bothArraysAreEqual = function(arrayA, arrayB) {
  // If arrayA and arrayB are the same object then we don't have to compare
  // their elements.
  // ```
  // var a = ["hi", "there"];
  // var b = a;
  // var c = ["hi", "there"];
  // a === b; // True :(
  // c === a; // False
  // ```
  if (arrayA === arrayB) { return true; }

  // If arrayA and arrayB aren't the same length
  // they can't possibly be the same
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    // If any of the elements are different, BAIL OUT!
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

/*
// This function executes a callback function many times.
var doThisManyTimes = function(numberOfTimes, ____) {
  for (var i = 0; i < numberOfTimes; i++) {
    ____();
  }
};
*/


/*
// This function will go over every element in an array one by one, calling the
// callback with each item. Replace the `____`s to make it work.
var each = function(array, ____) {
  for (var ____ = ____; ____ < array.length; ____++) {
    var ____ = array[i];
    ____(____);
  }
};
*/


// USE CASES ARE HERE. STOP SCROLLING! STOOOPPPPPPP.
// OK, now read on!
if (!module.parent) {
  // Callback functions provide a powerful way to enable code re-use.
  // Given the above functions, can you replace the `____`s with code to
  // cause the expected result?

  // Uncomment each use case and get it working before moving to the next.
  // You will know the code works because the word "true" will appear when
  // you run `node calling_a_callback_function_more_than_once.js`

  /*
  // Find, uncomment and implement the `doThisManyTimes` function above. Then
  // update this code to use it.
  var wows = [];
  ____(5, function() {
    wows.push("wow!");
  });

  var expectedWows = ["wow!", "wow!", "wow!", "wow!", "wow!"];
  console.log(bothArraysAreEqual(wows, expectedWows));
  */

  /*
  // Find, uncomment and implement the `each` function above, then update this
  // code to use it.
  var doubles = [];
  ____([4, 2, 9], ____(num) {
    ____.____(num * 2);
  });

  var expectedDoubles = [8, 4, 18];

  console.log(bothArraysAreEqual(doubles, expectedDoubles));
  */


  /*
  // Let's re-use one of our functions to reverse a list of words!
  reversedWords = [];
  var ____ = ____(____) {
    ____.____(____.split("").reverse().join(""));
  };

  each(["qatar", "zinfandel", "onomatopoeia"], reverseWords);

  expectedReversedWords = ["rataq", "lednafniz", "aieopotamono"];
  console.log(bothArraysAreEqual(reversedWords, expectedReversedWords));
  */


  /*
  // Let's build a list of strings of Q's of varying lengths!
  listOfQs = [];
  var addQs = function(number) {
    var q = "";
    while (number > 0) {
      q = q + "Q";
      number = number - 1;
    }
    ____.____(q);
  };

  var expectedListOfQs = ["QQQ", "Q", "QQQQQQQ"];
  ____([3,1,7], addQs);
  console.log(bothArraysAreEqual(listOfQs, expectedListOfQs));
  */
}
