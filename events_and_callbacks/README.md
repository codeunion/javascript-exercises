# Events and Callbacks

Working with JavaScript requires understanding how
[events](http://glossary.codeunion.io/event) work. Writing _evented_ JavaScript
requires familiarity with [callback](http://glossary.codeunion.io/callback)
functions.

With events, you write code that says "when this happens, run this function".
For example, a user clicks a button on your web page which makes a modal window
appear.

In both the browser and in node.js, you can write code that _listens for_ and
_responds to_ various events.

There are three components to writing an event listener in JavaScript:

1. The event **target** (in node.js, this is called an _emitter_)
2. The **type** (or name) of the event
3. The **callback** function to run when the event happens (or _fires_)

Here is an example of an event listener in the browser:

```html
<html>
  <body>
    <button id="click-me">Press</button>
  </body>

  <script type="text/javascript">
    var button = document.getElementById("click-me");

    button.addEventListener('click', function(evt) {
      alert('You clicked me!');
    });
  </script>
</html>
```

In the code above, the `button` is the event **target** (the button element that
will fire the event), `'click'` is the event **type** (when the button is
clicked, it fires this type of event), and the function

```javascript
function(evt) {
  alert('You clicked me!');
}
```

is the **callback** (the code that runs when the event is triggered).

## Exercises

### Level 1 - Functions that Take Functions as Inputs

* [Introduction to Callbacks](introduction_to_callbacks)
* [setTimeout and setInterval](settimeout_and_setinterval)
