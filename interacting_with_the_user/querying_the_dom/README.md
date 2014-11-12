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
    Everyone likes smoothies.
  </p>

  <h2>A list of fruits</h2>

  <ul class="fruits">
    <li class="fruit">apples</li>
    <li class="fruit">oranges</li>
    <li class="fruit">papaya</li>
    <li class="fruit">durian</li>
  </ul>

  <p>
    Sign up for our email newsletter.
  </p>

  <form name="newsletter-signup" method="post">
    <input type="email" name="email-address" placeholder="your@email.com">

    <input type="submit" value="Sign up">
  </form>

  <script src="my_script.js" type="text/javascript"></script>
</body>
</html>
```

**You do not need to change this page**. All of your work will go into a
JavaScript file called `my_script.js` (notice how the HTML above expects this).
Make sure to create that file as well.

### Find a single element

### Find multiple elements

### Search by id

### Search by class name

### Search by class name part two

### Search by attribute name

### The old ways are still with us
