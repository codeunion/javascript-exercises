# Embedding JavaScript in a Web Page

JavaScript was originally written to be the language that web developers could
use to program web pages in a browser. It has since evolved and moved into other
environments (like node.js, for example), but its primary purpose is still as
the scripting language for the web. All modern web browsers support JavaScript.

You may be wondering _how_ to use JavaScript on a web page. Good question! That
is exactly what we are going to focus on in these exercises: the various ways to
add JavaScript to a page.

As you move through these exercises, you may want to keep these pages open for
reference and learning:

- [Douglas Crawford's explanation of script tags](http://javascript.crockford.com/script.html)
- [MDN Documentation on the script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

## Exercises

**Note**: to complete these exercises, you will need to create an HTML file
(which we will refer to here by the name `page.html`). Once you have created the
file, copy the following default content into it and open the file in your
browser.

`page.html`:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript is fun</h1>
    <p>Did you know that JavaScript is the <em>lingua franca</em> of the web?</p>
  </body>
</html>
```

### In the beginning, there is <script>

Can you complete the following code so that the JavaScript runs? If it works, it
will display an alert window.

```html
<!DOCTYPE html>
<html>
  <body>
    <__>
      alert("ITS ALIVE!!");
    </__>
    <h1>JavaScript is fun</h1>
    <p>Did you know that JavaScript is the <em>lingua franca</em> of the web?</p>
  </body>
</html>
```

Search suggestion: `embed javascript in html`

> To tell the browser to "execute this JavaScript", you must use the `<script>`
> tag. Otherwise, the browser expects to find normal HTML and it won't run the
> JavaScript.

### Best practice: define the script type

Can you assign the appropriate value to the tag in this example?

```html
<!DOCTYPE html>
<html>
  <body>
    <__ type="__/__">
      alert("ITS ALIVE!!");
    </__>
    <h1>JavaScript is fun</h1>
    <p>Did you know that JavaScript is the <em>lingua franca</em> of the web?</p>
  </body>
</html>
```

Search suggestion: `define type attribute javascript script tag`

> While browsers will default to using JavaScript even if you don't define the
> `type` attribute of the `script` tag, it is a good idea to be explicit so that
> the browser knows what to expect.

### Everything must wait its turn

Can you edit the code below so that it executes the JavaScript? What can you
learn about how the browser loads a page from this example?

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>This should appear first</h2>

    <__ type="__/__">
      confirm("Shall we keep going?");
    </__>

    <h2>...then finally we get to here.</h2>
  </body>
</html>
```

> Browsers load HTML from top to bottom, left to right. When you put a
> `<script>` tag in the page, the browser will stop loading the rest of the HTML
> page to run the JavaScript, and then it will continue loading the page only
> after the JavaScript has finished executing.

### Inline scripts can print text to the page

Can you figure out how to make the code below print the current time onto the
HTML page?

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>What time is it?</h2>

    <p>
      The time is <strong><script type="text/javascript">document.__( new Date().toString() );</script></strong> where you are.
    </p>
  </body>
</html>
```

Search suggestion: `javascript write text to document`

> What's that `new Date().toString()` code? That is a how, in JavaScript, we can
> say "get me the current date and time, and then convert it to a String".

### Think global, act local

So that last example left us with a lot of JavaScript in one `<script>` tag.
What if we wanted to break it up, so that one script created the time string
while the other wrote it to the page?

Can you modify the code below so that it renders the same time as before, but
using a variable instead to store the time string?

```html
<!DOCTYPE html>
<html>
  <script type="text/javascript">
    var __ = new Date().toString();
  </script>

  <body>
    <h2>What time is it?</h2>

    <p>
      The time is <strong><script type="text/javascript">document.__(__)</script></strong> where you are.
    </p>
  </body>
</html>
```

Search suggestion: `javascript store value in variable`

> Even though the JavaScript in this example is split between two `<script>`
> tags, it all runs in the same context. Variables declared in one script will
> be accessible to all other scripts on the same page.

### Put your JavaScript in its own file

While it is quick and easy to write JavaScript code within the `<script>` tags
on your HTML document, it is not a great practice. As a rule of thumb, you want
to separate HTML, CSS, and JavaScript into their own files.

Luckily, it is easy enough to load in an external JavaScript file using the very
same `<script>` tag as before.

**Note**: to complete this exercise, you need to create a separate file
`my_script.js` where you will write your JavaScript code. Make sure it is in the
same directory as `page.html`.

Can you figure out how to appropriately load `my_script.js` into `page.html` so
that it writes the time in the same way as before?

`my_script.js`:

```javascript
// store the time string in it's own variable
var timeString = new Date().toString();
```

`page.html`:

```html
<!DOCTYPE html>
<html>
  <script type="text/javascript" __="__.js"></script>

  <body>
    <h2>What time is it?</h2>

    <p>
      The time is <strong><script type="text/javascript">document.write(timeString)</script></strong> where you are.
    </p>
  </body>
</html>
```

Search suggestion: `how to load external javascript file in html`

### Importing scripts from anywhere

If we can load our own scripts from other files, why not load scripts that other
people have written? For example, what about a third-party library like
`jQuery`?

Can you figure out how to import the [jQuery library](http://jquery.com/) into
the page? Once you get it to work, you will see an alert appear.

`page.html`:

```html
<!DOCTYPE html>
<html>
  <script type="text/javascript" src="__"></script>

  <body>
    <h2>Waiting for jQuery...</h2>
    <script type="text/javascript">
      // The jQuery variable is defined by the jQuery library. If the library is
      // loaded, this variable will evaluate to a truthy value.
      if (jQuery) {
        alert("We have jQuery!");
      }
    </script>
  </body>
</html>
```

Search suggestion: `import jquery`

> As you dig around, you may notice that there is more than one way to import
> jQuery (or any other library, for that matter). Because the `src` attribute of
> a `<script>` tag can contain _either_ the name of a file on the same web
> server _or_ a URL to a file hosted on some other web server (like a CDN), you
> can choose to download the library and link to it with a `src` attribute like
> `jquery-1.11.1.js` or you can link directly to an external host with a `src`
> attribute like
> `http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js`.

### Be careful where you run that script

If you are loading multiple scripts, does it matter in which order they are
loaded? Think about that question for a moment before diving into this exercise.

Can you modify the HTML file below (by moving the lines of code around - you
don't need to _change_ any line) so that it will show an alert message telling
you that jQuery has loaded?

`page.html`:

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Did you see an alert yet?</h2>

    <script type="text/javascript" src="my_script.js"></script>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  </body>
</html>
```

`my_script.js`:

```javascript
// The jQuery variable is defined by the jQuery library. If the library is
// loaded, this variable will evaluate to a truthy value.
if (jQuery) {
  alert("We have jQuery!");
}
```

Search suggestion: `should script tags be in head or body`

> Remember: the browser reads HTML from top to bottom. When it encounters a
> `<script>` tag, it will execute the JavaScript right then and there, _whether_
> _or not_ any dependencies (like jQuery, in this example) have been loaded
> already.
