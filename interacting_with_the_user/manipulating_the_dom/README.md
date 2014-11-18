# Manipulating the DOM

Once you've learned how to [query the DOM](../querying_the_dom) to select
elements from your web page, the next question is: what can you do with those
elements?

When we write JavaScript, most of the time we will be writing programs that
affect the DOM, and thus, the user interface. There are many ways to do this. A
small sampling:

- Show a chat window on the page when a user starts a new chat session
- Zoom in on the map when a user clicks on the "+" button
- When a user selects a preferred airline, highlight matching flights in yellow

The examples are as numerous as the stars. Just know that anytime the content of
a web page changes, that is JavaScript doing its work.

In these exercises, we are going to explore some of the common ways to
manipulate the DOM at the level of individual elements.

As a reference, we will be using the documentation for the
[HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) API
as well as some of the objects it inherits (i.e. shares) the properties and
methods of: [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
and [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node).

## Exercises

To complete these exercises, you will need two files:

- `page.html`
- `my_script.js`

Create a file called `page.html` and paste the following code into it:

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Smoothie Time</h1>

  <p>
    Everyone likes smoothies. My favorite is <span class="fruit">blueberry</span>.
  </p>

  <h2>A list of fruits</h2>

  <ul id="fruit-list">
    <li class="fruit">apple</li>
    <li class="fruit">orange</li>
    <li class="fruit">papaya</li>
    <li class="fruit">durian</li>
  </ul>

  <p>
    Sign up for our email newsletter.
  </p>

  <form class="subscribe-form" name="newsletter-signup" method="post">
    <input type="email" name="email-address" placeholder="your@email.com">

    <input type="submit" value="Sign up">
  </form>

  <script src="my_script.js"></script>
</body>
</html>
```

**You do not need to change this page.** Your exercise code will go in
`my_script.js`. Make sure to create this file in the same directory as
`page.html`.

Notice that `<script>` tag just before the closing `<body>` tag in the HTML
above? This is how your JS will be loaded into the page and executed.

### Reading element properties

First order of business: exploring the properties of DOM elements. What kind of
information do they hold?

Can you find the right properties to read data about the `<ul id="fruit-list">`
element on the page?

`my_script.js`:

```javascript
// select the <ul id="fruit-list"> element
var fruitList = document.querySelector("#fruit-list");

// get the element's id
console.log(fruitList.__)
// should print something like:
// fruit-list

// get the name of the element's tag
console.log(fruitList.__)
// should print something like:
// UL

// get the HTML contents of the element
console.log(fruitList.__)
// should print something like:
// <li class="fruit">apple</li>
// <li class="fruit">orange</li>
// <li class="fruit">papaya</li>
// <li class="fruit">durian</li>

// get the text contents of the element
console.log(fruitList.__)
// should print something like:
// apple
// orange
// papaya
// durian

// get the HTML of the element (including itself + contents)
console.log(fruitList.__)
// should print something like:
// <ul id="fruit-list">
//   <li class="fruit">apple</li>
//   <li class="fruit">orange</li>
//   <li class="fruit">papaya</li>
//   <li class="fruit">durian</li>
// </ul>
```

Search suggestion: for each of the examples above, you can try using variations
of the search pattern `how to get __ property of DOM element`

> Tip: instead of writing all of these out at once in your `my_script.js` file,
> try them out one-by-one in your browser's developer console first. It is much
> easier to practice learning new techniques in the small environment of a
> console rather than the relatively larger environment of a full JS file. You
> get the added bonus of immediate feedback.

### Writing element properties

Some of the properties can be both read _and_ written. Meaning we can use
JavaScript to modify those values whenever we please.

Can you figure out how to change the text of the elements below?

```javascript
// select the <h1 id="title"> tag
var title = document.__(__);
var currentTitle = title.__;
title.__ = "Super " + currentTitle + "!";
// should change the text in the <h1 id="title"> tag to:
// "Super Smoothie Time!"

// select the "favorite fruit" tag
var favoriteFruit = document.__(__);
favoriteFruit.__ = "strawberry";
// should change the text in the first <p> tag to:
// "Everyone likes smoothies. My favorite is strawberry."
```

Search suggestion: `change text within element javascript`

> There is actually more than one way to accomplish this task. Two of the main
> options are the `Node.textContent` property and the `Element.innerHTML`
> property. What are the differences between the two?

### Dynamically changing CSS

Every CSS style available to an element is also accessible through its `style`
attribute.

Can you change the list of fruits so that "orange" is shown as white text on an
orange-colored background?

```javascript
var fruits = document.__(__);
var orange = fruits[__];

orange.__.__ = "orange";
orange.__.__ = "white";
// should change the display so that the <li>orange</li> element is rendered in
// white text on an orange background
```

Search suggestion: `change css of element javascript`

> The code above takes a two-step approach to finding the appropriate `<li>`
> element. Can you do it with a single call of `querySelector()`? Hint: you can
> use the `:nth-child` pseudo-selector.

### Adding and removing classes

So it is not good practice to change the styles of an element directly. The
preferred way is to define styles in CSS and then apply those styles to an
element using a class or id attribute.

Let's say that we want to define styles that highlight an element (yellow
background). To start, you will need to add a `<style>` tag to your HTML. It
should go within a `<head>` tag, like this:

```html
<html>
<head>
  <style type="text/css">
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>
<!-- ... rest of document omitted -->
```

Can you figure out how to toggle classes on elements?

```javascript
var fruits = document.querySelectorAll("li.fruit");
var papaya = fruits[2];

var currentClasses = papaya.__;
papaya.__ = currentClasses + " __";
// should highlight the listing for "papaya" in yellow

var favoriteFruit = document.querySelector("span.fruit");
favoriteFruit.__ = "";
// should remove the fruit class from the "favorite fruit" <span> element
// verify by using the DOM inspector tool
```

Search suggestion: `javascript add class to element`

> There is (surprise, surprise) more than one way to solve this problem. Newer
> browsers implement the
> [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList)
> API for elements. Older browsers only support the `className` property, which
> is expected in this exercise. If you are up for it, try solving using both.

### Hide and show elements

Hiding an element in HTML is accomplished by setting its `display` style to
`"none"`.

Can you complete the code below so that the "papaya" fruit will be hidden and
shown at 1 second intervals?

```javascript
var hideElement = function(element) {
  element.style.display = "none";
};

var showElement = function(element) {
  // this clears the display property so that the element inherits this style
  element.style.display = "";
};

var toggleElement = function(element) {
  if (element.style.display === "none") {
    __(element);
  } else {
    __(element);
  }
};

var fruits = document.querySelectorAll("li.fruit");
var papaya = fruits[2];

setInterval(function() {
  toggleElement(__);
}, 1000);
```

Search suggestion: `javascript hide and show elements`

> This exercise is slightly more complicated, but it offers a good opportunity
> to practice _reading_ and _interpreting_ the intent of a program. What is the
> purpose of each function? How are the intended to be used?

### Deleting elements

Showing and hiding elements is fine. But sometimes you want to get rid of an
element entirely: not just hiding it from the view, but removing it from the
DOM.

Can you figure out how to remove the fruit `"durian"` from the list?

```javascript
var fruits = document.querySelectorAll("li.fruit");
var durian = fruits[3];

durian.__();
// should remove the <li class="fruit">durian<li> element from the DOM
// verify by using the DOM inspector tool
```

Search suggestion: `javascript remove element from DOM`

> Here's a noodle scratcher: after you remove the element, where does it go?

### Adding new elements

Now that you know how to remove elements, let's learn how to move and add
elements. In this case, we want to sort the list of fruits alphabetically.

Can you figure out how to move the `"durian"` fruit to the correct location and
then add a new fruit "pomegranate" to the list?

**Note**: you will need to use two separate methods to complete this exercise.

```javascript
var fruits = document.querySelectorAll("li.fruit");
var durian = fruits[3];
var orange = fruits[1];

durian.remove(); // remove "durian" from the DOM

var fruitList = document.querySelector("ul#fruit-list"); // select parent element
fruitList.__(durian, orange); // insert durian in proper location (before orange)
// should show the fruits in alphabetical order

var pomegranate = document.createElement("li"); // create new element
pomegranate.innerText = "pomegranate"; // set text of element
pomegranate.className = "fruit"; // set class of element

fruitList.__(pomegranate); // add element to <ul id="fruit-list">
// should add the <li class="fruit">pomegranate</li> to the end of the list
```

Search suggestion: `javascript add element to dom`

> If you explore the
> [Node object API](https://developer.mozilla.org/en-US/docs/Web/API/Node), you
> will discover that there are a few different ways to add elements to the DOM.
> The key pattern to be aware of when adding elements is: (1) select or create
> the element to be added; (2) select the parent element to which you will be
> adding a new element as a child; (3) use appropriate insertion method
> depending on where in the list of children the new element should be added.

### Special methods of elements

There are lots of ways to interact with elements on the DOM. Remember that all
HTML elements are of type `HTMLElement` and thus they inherit properties and
methods from their ancestor types:

- [`HTML Element`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
- [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)

There are a few other types in the chain, but these are the main ones.

Can you use your searching savvy and the above documentation to figure out how
to complete the DOM manipulation code below?

```javascript
var subscribeForm = document.querySelector("form.subscribe-form"); // get form
console.log( subscribeForm.__("name") ); // read name attribute
// should print "newsletter-signup"

subscribeForm.__("action", "/subscribe"); // set action attribute
console.log( subscribeForm.__("action") ); // read action attribute
// should print "/subscribe"

var subscribeEmail = subscribeForm.__("input[name='email-address']");
subscribeEmail.__(); // set focus to email input field

var submitBtn = subscribeForm.__("input[type='submit']");
submitBtn.__("value", "JOIN ME");
// should change the text of the submit button to "JOIN ME"

// what will this do?
//
// setTimeout(function() {
//   submitBtn.click();
// }, 1000);
```

### Challenge: get all element descendants

Can you write a function `getDescendants()` that, when given an element as an
argument, will return an array of all descendants of that element (i.e. its
children, its children's children, its children's children's children, ...)?

You may want to consider using
[recursion](http://en.wikipedia.org/wiki/Recursion).
