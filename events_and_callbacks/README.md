# Events and Callbacks

Working with JavaScript in the browser and in node.js requires an understanding of how events work. Then, to write _evented_ JavaScript, you need to be familiar with the notion of a _callback_ function.

For a more general definition of these terms, visit the [glossary](http://glossary.codeunion.io/) entries:

* [Event](http://glossary.codeunion.io/event)
* [Callbacks](http://glossary.codeunion.io/callback)

With events, you can write code that says "when this happens, run this function". For example, maybe a user clicks a button on your web page which makes some modal window appear.

In both the browser and in node.js, you can write JavaScript code that _listens for_ and _responds to_ various events.

There are three components to writing an event listener in JavaScript:

1. The event **target** (in node.js, this is called an _emitter_)
2. The **type** (or name) of the event
3. The **callback** function to run when the event happens (or _fires_)

Here is an example of an event listener that would run in the browser:

```javascript
var button = document.getElementById("#click-me");

button.addEventListener('click', function(evt) {
  alert('You clicked me!');
});
```

In the code above, the `button` is the event **target** (the button element that will fire the event), `'click'` is the event **type** (when the button is clicked, it fires a this type of event), and the function

```javascript
function(evt) {
  alert('You clicked me!');
}
```

is the **callback** (the code that will run when the event is triggered).

## Exercises

### Level 1 - Functions that Take Functions as Inputs

* [Passing Functions to Functions](passing_functions_to_functions)
