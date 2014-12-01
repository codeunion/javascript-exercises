// 1. Scroll to the bottom to get to the use cases.
// 2. Uncomment the next use case and make it work. Frequently this means
//    replacing `____`s with code of your own.
// 3. Verify it works by running the file with the `node` command line program.
// 4. Repeat until all use cases are functioning.

var animalToCatTranslator = function(sentence) {
  return sentence.replace("animal", "cat");
};

var animalToDogTranslator = function(sentence) {
  return sentence.replace("animal", "dog");
};

/*
// Write your own translator for your preferred animal!
var ____ = ____(sentence) {
  return ____._____(____, ____);
};
*/

var favoriteAnimal = function(animalTranslator) {
  return animalTranslator("animals are the best!");
};

// !module.parent is true if the current file is being run directly in node
// and false when being required by another file.
if (!module.parent) {
  // Uncomment each use case and get it working before moving to the next.
  // You will know the code works because the word "true" will appear when
  // you run `node passing_functions_to_functions.js`

  // Because functions are data in JavaScript you can pass them as arguments to
  // other functions. Functions passed to another function to be called are
  // known as "callback functions".

  // Choose a callback function from the animalToXTranslators above to make the
  // following use cases pass.
  // console.log(favoriteAnimal(____) === "cats are the best!");
  // console.log(favoriteAnimal(____) === "dogs are the best!");

  // Define your own animal translator! Uncomment lines 15 to 20, then make the
  // following use case pass.
  // console.log(favoriteAnimal(____) === "____s are the best!");

  // Have you tried to put ()'s after the callback function being passed as an
  // argument? What happened? Why do you think that is?


  // You can also define callback functions in-line:
  // console.log(favoriteAnimal(function(sentence) {
  //   ____ ____.____("animal", "aardvark");
  // } === "aardvarks are the best!");
  // This is known as an "anonymous function".
}
