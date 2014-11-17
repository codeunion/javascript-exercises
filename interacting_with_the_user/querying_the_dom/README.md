# Querying the DOM

When the browser load an HTML page, it uses the tags of the page to create the
**Document Object Model**, or DOM for short.

The DOM is a [tree of elements](http://www.computerhope.com/jargon/d/dom.htm)
that contain all of the information about what is on the current web page: the
tags, text, and media. With JavaScript, web developers can change elements on
the DOM.

For example, we may want to write a script that does the following:

1. When a user clicks on the "sign up" button
2. Show the sign up form
3. When the form is submitted
4. Send the user's information to the server
5. Hide the sign up form

In order to accomplish this script, we need to be able to "show" and "hide" the
sign up form. The form is a DOM element. So we can use JavaScript to modify it.
**But**, before we can modify it, we need to know how to find it.

Finding specific elements on the page is called **querying the DOM**, and that
is precisely what we are going to practice in these exercises.

If you are still confused about what the DOM is, read
[Chris Coyier's post "What is the DOM?"](http://css-tricks.com/dom/).

## Exercises

For the following exercises, we will be querying elements from the DOM. So we
will need a DOM to work with!

Create a file called `page.html` and paste the following code into it:

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Smoothie Time</h1>

  <p>
    Everyone likes smoothies. My favorite is <span class="fruit">blueberry.</span>
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
</body>
</html>
```

**You do not need to change this page**.

To complete the exercises, open `page.html` in your browser and then open the
[browser's development console](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers).
Type your JavaScript code directly into the console.

### Find a single element

Start by selecting just one element from the page. Can you find the right method
for the `document` object, which, when you pass it a CSS-like selector, will
return a DOM element?

You should use
[this page on DOM selection](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Locating_DOM_elements_using_selectors)
as a primary reference.

```javascript
var title = document.__("#title");

console.log(title);
// should print:
// <h1 id="title">Smoothie Time</h1>
```

Search suggestion: `select single element from the DOM javascript`

> There are actually multiple ways to accomplish this. You may stumble into
> `document.getElementById()`, but in this case we want to focus on the new and
> improved
> [`document.querySelector()` method](https://developer.mozilla.org/en-US/docs/Web/API/Element.querySelector).

### Find multiple elements

What if you want to retrieve _more_ than just one element? Can you find the
right method to select all of the `<li>` elements with the class `fruit`?

```javascript
var fruits = document.__("li.fruit");

console.log(fruits);
// should print something like:
// [<li class=​"fruit">​apple</li>​, <li class=​"fruit">​orange</li>​, <li class=​"fruit">​papaya​</li>​, <li class=​"fruit">​durian​</li>​]
```

Search suggestion: `select multiple elements from the DOM` (note: you can
exclude links to jQuery methods by addign `-jquery` to your search)

> Note the CSS-like selector syntax that is used by both the `querySelector()`
> and `querySelectorAll()` methods. You can pass them strings that follow a
> similar syntax to select elements in the same way you would in CSS. To learn
> more about CSS selectors, check out
> [the wiki](https://github.com/codeunion/fundamentals-of-web-development/wiki/Basics-of-CSS#basics-of-selectors)
> or some
> [documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).

### Search by tag name

Can you select all of the `<p>` elements on the page?

```javascript
var paragraphs = document.__(__);

console.log(paragraphs);
// should print something like:
// [p, p]

// and then grab the second paragraph from the collection
console.log(paragraphs[__]);
// should print something like:
// <p>Sign up for our email newsletter.</p>
```

Search suggestion: `css selector to find elements by tag name`

> Which method did you use: `querySelector()` or `querySelectorAll()`? What
> happens if you use the other one? Try it!

### Search by id

Can you select the element with id `fruit-list`?

```javascript
var fruitList = document.__(__);

console.log(fruitList);
// should print something like:
// <ul id=​"fruit-list">​…​</ul>
```

Search suggestion: `css selector to find elements by id`

> Don't forget to prepend your id selector with a `#`!

### Search by class name

Can you select all elements that have the class name `fruit`?

```javascript
var allFruit = document.__(__);

console.log(allFruit);
// should print something like:
// [span.fruit, li.fruit, li.fruit, li.fruit, li.fruit]
```

Search suggestion: `css selector to find elements by class`

> Don't forget to prepend your class selector with a `.`!

### Search by class name part two

Hmm... that last query wasn't quite what we were looking for. What we really
wanted was to select all of the elements with class `fruit` that appear in the
`fruit-list`.

In other words, we don't want that pesky `<span>` tag in the results.

Can you write a new query which returns _only_ the elements with class `fruit`
that are inside of the `<ul id="fruit-list">` element?

```javascript
var fruitInTheList = document.__(__);

console.log(fruitInTheList);
// should print something like:
// [li.fruit, li.fruit, li.fruit, li.fruit]
```

> If you are unsure of how to accomplish this, remember that you can combine
> selectors in a single query string. For example, `"p .button"` will select all
> tags with class `button` inside of a `<p>` tag. This comes straight from the
> CSS selector syntax, so if your research doesn't yield good results when
> searching for JavaScript solutions, you could try searching for things like
> `css select nested elements`.

### Search by attribute name

There are all kinds of selectors beyond tag name, class, and id. One of the
common ones is to search by other attributes such as the `name` attribute.

Can you write a query which returns the `<input>` tag with a `name` attribute of
`email-address`?

```javascript
var subscribeEmail = document.__(__)

console.log(subscribeEmail);
// should print something like:
// <input type=​"email" name=​"email-address" placeholder=​"your@email.com">​
```

Search suggestion: `css selector to find elements by name attribute`

> To be even more specific, try searching only for tags within the
> `newsletter-signup` form.

### All in the family

One you have selected an element, you can _traverse_ the DOM tree (go up or
down). When discussing the tree, we use the same language as family trees, as
the metaphor applies quite nicely.

Can you figure out what properties of an element will return their **child** and
**parent** elements?

```javascript
var fruitList = document.querySelector("#fruit-list");

console.log(fruitList.__)
// should print something like:
// [<li class=​"fruit">​apple​</li>​, <li class=​"fruit">​orange​</li>​, <li class=​"fruit">​papaya​</li>​, <li class=​"fruit">​durian​</li>​]

console.log(fruitList.__)
// should print something like:
// <body>​…​</body>
```

Search suggestion: `javascript get child elements` &
`javascript get parent element`

> In addition to _children_ and _parents_, elements also have _descendants_,
> _ancestors_, and _siblings_. There is no built-in method for these, though. If
> you're up for a challenge, you could try implementing them.

### The old ways are still with us

Once upon a time, there was no `querySelector()` and `querySelectorAll()`. These
methods are relative newcomers on the scene.

How did we select elements on the DOM before the advent of the selectors API,
you ask? There were a few options. In fact, they're all still around, so you can
try them out yourself.

All of these methods can be found in the
[Element API](https://developer.mozilla.org/en-US/docs/Web/API/Element)
documentation. They all start with the word `get`, too.

Can you select the same elements as before _without_ using `querySelector()` or
`querySelectorAll()`?

```javascript
// instead of document.querySelectorAll("p")...
var paragraphs = document.__("p");

console.log(paragraphs);
// should return something like:
// [p, p]

// instead of document.querySelector("#fruit-list")...
var fruitList = document.__("fruit-list");
console.log(fruitList);
// should return something like:
// <ul id=​"fruit-list">​…​</ul>


// instead of document.querySelectorAll(".fruit")...
var allFruit = document.__("fruit");
console.log(allFruit);
// should return something like:
// [span.fruit, li.fruit, li.fruit, li.fruit, li.fruit]

// instead of document.querySelectorAll("#fruit-list .fruit")...
var fruitInTheList = document.__("fruit-list").__("fruit");
console.log(fruitInTheList);
// should return something like:
// [li.fruit, li.fruit, li.fruit, li.fruit]

// instead of document.querySelector("input[name='email-address']")...
var subscribeEmail = document.__("email-address")
console.log(subscribeEmail);
// should return something like:
// <input type=​"email" name=​"email-address" placeholder=​"your@email.com">​
```

> A word of warning: be aware of pluralization when using these methods. You
> write `getElementById()` but `getElementsByClassName()`. Not the same.
