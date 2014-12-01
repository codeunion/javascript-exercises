# Letters and Words
While we use words without much thought, computers represent
[data](https://glossary.codeunion.io/data) as numbers. In order to store words
in a computer we use a [data type](http://glossary.codeunion.io/data-types)
known as a [string](http://glossary.codeunion.io/string-data-type). Strings are
a [list](http://glossary.codeunion.io/list-data-type) of
[characters](http://glossary.codeunion.io/character-data-type);

## Instructions

This set of exercises is intended to be ran within the `node`
[REPL](http://glossary.codeunion.io/read-evaluate-print-loop-repl)

1. Open a terminal and run `node`
2. Work through each use case and replace `____`s with working code.
3. Confirm the output from the command matches the expected output.

## Exercises
Knowing the length of a string is useful. [Docs for
String.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

```javascript
// The > is the REPL prompt. Don't type it!
> 'hi there'.____; // Replace ____ with working code.
8
> 'what's happening?'.____; // Replace ____ with working code.
17
```
Let's swap some words around. [Docs for
String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

```javascript
// You know the drill.  Replace `____` with appropriate code.
> 'Pretty sure zee is the lamest'.____('lamest', 'coolest');
'Pretty sure zee is the coolest'
> 'Dead men tell no tales'.____('tales', 'rails');
'Dead men tell no rails'
```

Finding a string inside of another string can be useful. [Docs for
String.prototype.match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

```javascript
> 'What kind of madness is this?'.____('madness');
[ 'madness',
    index: 13,
    input: 'What kind of madness is this?' ]
> 'When there is nothing you can find'.____('something');
null
> 'You can even use regular expressions!'.____(/(\w{3})/i);
[ 'You'
    index: 0,
    input: 'You can even use regular expressions!' ]
```

Reflect on: Could you get the location where the found string lives?

Converting strings into a list is helpful in all kinds of situations. Say,
turning a comma seperated list into a set of tags for a blog post, CSV parsing
or even encryption. [Docs for
String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

```javascript
> 'Hey there voters!'.____(' ');
[ 'Hey', 'there', 'voters!' ]
> 'Such a character!'.____(''); // Notice an empty string tells JavaScript to split
                                // a string into individual characters.
[ 'S', 'u', 'c', 'h', ' ', 'a', ' ', 'c', 'h', 'a', 'r', 'a', 'c', 't', 'e', 'r', '!' ]
> 'eggs, bacon, cheese, tomato, kale,'.____(____);
[ 'eggs', 'bacon', 'cheese', 'tomato', 'kale,' ]
```


Reaching into a string to get it's contents based on their location in the
string is useful when parsing protocols like HTTP, etc. [Docs for
String.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

```javascript
> 'Name: Zee'.____(6);
'Zee'
> 'Favorite Color: Chartreuse'.____(____);
'Chartreuse'
> 'Favorite Animal: Catapult'.____(____,3);
'Cat'
> 'Weirdest Trait: Can lick elbow'.____(-14);
'Can lick elbow'
```

Find the first location of a character. [Docs for
String.prototype.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

```javascript
> 'Pork: The Other White Meat'.____(':');
4
> 'Moods: Happy, Sad, Grumpy'.____(',');
12
> 'Friend or foe?'.____('E');
-1
```

And the last location. [Docs for
String.prototype.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

```javascript
> 'Groceries: avacados, bananas, strawberries, oregano'.____(',')
Should evaluate to 42
```

Lets join some strings together. [Docs for
String.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

```javascript
> 'Hello'.____('World');
'HelloWorld'
> 'Hey'.____('Thats', 'A', 'Lot','Of', 'Words');
'HeyThatsALotOfWords'
```

Sometime's we'll want some quotes in our quotes.

```javascript
> 'They said: ____'Yo____'';
'They said: \'Yo\''
> ____Or you could use a different 'kind' of quotes____;
'Or you could use a different \'kind\' of quotes'
```

Search suggestion: 'Escaping quotes in JavaScript'

### Put It Together!

Open the file `questions_and_answers.js` and write a function that given a
string of the format 'Question: Answer' returns the "Answer" section.

Verify your implementation works by running `node questions_and_answers.js`.
