# Manipulating the DOM

Once you've learned how to [query the DOM](../querying_the_dom) and select
elements from your web page, the next question is: what can you do with those
elements?

When we write JavaScript, most of the time we will be writing programs that
affect the DOM, and thus, the user interface. There are many ways to do this. A
small sampling:

- Show a chat window on the page when a users starts a new chat session
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
    <input onload="focus()" type="email" name="email-address" placeholder="your@email.com">

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

### Writing element properties

### Dynamically changing CSS

### Hide and show elements

### Deleting elements

### Adding new elements

### Special methods of elements
