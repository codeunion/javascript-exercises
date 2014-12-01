// 1. Scroll to the bottom to get to the use cases.
// 2. Uncomment the next use case and make it work. Frequently this means replacing
//    `____`s with code of your own.
// 3. Verify it works by running the file with the `node` command line program.
// 4. Repeat until all use cases are functioning.

var bothArraysAreEqual = function(arrayA, arrayB) {
  if (arrayA === arrayB) { return true; }

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, and building a new array with the callback's return
// values. Replace the `____`s to make it work.
var map = function(____, ____) {
  var newArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    newArray[____] = ____(____);
  }
  return newArray;
};
*/

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};
*/


// USE CASES ARE HERE. STOP SCROLLING! STOOOPPPPPPP.
// OK, now read on!
//
if (!module.parent) {
  // Using callbacks to transform arrays is a very common use case. Let's
  // implement some functions that take an array and a callback and return a new
  // array with the callback applied to it.

  // Uncomment each use case and get it working before moving to the next.
  // You will know the code works because the word "true" will appear when
  // you run `node using_callback_functions_to_transform_arrays.js`

  /*
  // Defining an array, calling each on another array, and filling the new array
  // is a common pattern known as "mapping".
  // Find, uncomment, and implement the "map" function defined above and fill in
  // the `____`s to make it work.
  var square = function(number) {
    return number * number;
  };
  var squaredNumbers = map([2, 8, 3], square);

  var expectedSquaredNumbers = [4, 64, 9];
  console.log(bothArraysAreEqual(squaredNumbers, expectedSquaredNumbers));
  */

  /*
  // Let's shout some words:
  var shoutedWords = ____(["one", "two", "three"], ____(____) {
    ____ ____.toUpperCase();
  });

  var expectedShoutedWords = ["ONE", "TWO", "THREE"];
  console.log(bothArraysAreEqual(shoutedWords, expectedShoutedWords));
  */

  /*
  // Sometimes you'll want to take an array and remove elements that don't
  // match certain criteria. Uncomment and implement the "filter" function in
  // the source code above.
  //
  // A callback that returns a boolean (a true or false value) is known as a
  // "predicate".

  var onlyEvenNumbers = filter([2, 9, 6, 8, 4], ____(____) {
    ____ ____ % 2 === 0;
  });

  console.log(bothArraysAreEqual(onlyEvenNumbers, [2, 6, 8, 4]);
  */

  /*
  // Let's filter a list down to words that start with the best letter ever.
  // Yes. That letter is Z.

  var bestWordPredicate = function(____) {
    return ____.toUpperCase().charAt(0) === "Z";
  };
  var onlyAwesomeWords = ____(["zookeeper", "zelda", "misanthrope", "anarchy", "acrostic"], ____);
  console.log(bothArraysAreEqual(onlyAwesomeWords, ["zookeeper", "zelda"]));
  */
}
