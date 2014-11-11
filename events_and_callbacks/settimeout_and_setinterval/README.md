# setTimeout and setInterval

[Documentation for Window Timers](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers)
[Documentation for Node.js Timers](http://nodejs.org/docs/v0.6.1/api/timers.html)

## Exercises

### Timeouts fire functions after x milliseconds

Can you use `setTimeout` to delay execution of a callback function?

```javascript
console.log("Wait for it...");
__(function() { __.__(__) }, __);
// should print "NOW!" after waiting one second
```

Search suggestion: `delay execution node.js`

### Delayed execution can be weird to understand

Make a hypothesis about what the following code will do. Then run it. Did it do
what you expected? If not, why not?

```javascript
console.log("Before the timeout");
setTimeout(function() { console.log("In the timeout function"); }, 500);
console.log("After the timeout");
```

What about this code?

```javascript
console.log("Before the timeout");
setTimeout(function() { console.log("In the timeout function"); }, 0);
console.log("After the timeout");
```

Search suggestion: `how does setTimeout work javascript`

### Sometimes you want to cancel the timer

Can you write code to prevent the bomb from going off?

```javascript
__ __ = setTimeout(function() { console.log("KABOOM!!") }, 7000);
__(__);
```

Search suggestion: `cancel setTimeout function javascript`

### Timers aren't perfect timers

The following code may be confusing. Make a hypothesis about what you think it
will do, then test your hypothesis by running the code. Did it do what you
expected? Why or why not?

```javascript
console.log("Before the timeout");
setTimeout(function() { console.log("In the timeout"); }, 500);
console.log("After the timeout");

var now = Date.now();
console.log("Starting the while loop");
while (Date.now() < now + 3000) {
  // waiting, waiting...
}
console.log("While loop finished");
```

### But they can still be useful

Can you complete the code below to create the desired behavior?

```javascript
var timer = function(seconds) {
  var milliseconds = seconds * 1000;
  console.log("Setting timer for " + seconds + " seconds")
  __(__() { console.log("Timer done!") }, __);
};
timer(3)
// should print "Timer done!" after a delay of 3 seconds
```

Search suggestion: `syntax setTimeout function javascript`

### An example of a potential use case

Can you complete the code below to configure a session timeout feature (like
what you might find in an online banking account, for example)?

```javascript
var warnTimeout = function() {
  console.log("Your online banking session will end in 10 seconds...");
};
var sessionTimeout = function() {
  console.log("Your online banking session has timed out");
};
var sessionLength = 2 * 60 * 1000; // 2 minutes
__(__, sessionLength - 10 * 1000); // 10 seconds before
__(__, sessionLength);
// should print a warning in 1 min 50 seconds
// and a session timeout notice in 2 minutes
```

### Intervals do something over and over and over and...

Can you make the following code print `Na-na-na-na` every half second?

```javascript
console.log("Starting the counter");
__(function() {
  console.log("Na-na-na-na");
}, __)
console.log("Counter finished. Maybe?")
// should print "Na-na-na-na" every half second
```

Search suggestion: `call function repeatedly at set times javascript`

### Forever is a long time

So it may be useful to be able to stop your perpetual motion machine after
starting it. Can you figure out how to make a stopwatch that counts the seconds
from 0 but actually **stops** after 5 seconds?

```javascript
var time = 0;
var stopWatch = function() {
  console.log(__);
  time++;
};

console.log("Starting stopwatch");
stopWatch();
var __ = setInterval(stopWatch, 1000);

setTimeout(function() {
  __(__);
}, __);
```

Search suggestion: `stop function in setInterval javascript`

### Working with timer IDs for maximum power

You can have more than one interval going at once, you know. Can you reason
about the following code and see if you can understand what is going on?

```javascript
var index = 0;
var counter = function() {
  console.log(index);
  index++;
};
var counterID = setInterval(counter, 100);

var monitorID;
var monitor = function() {
  if (index > 20) {
    clearInterval(counterID);
    clearInterval(monitorID);
  }
};
monitorID = setInterval(monitor, 500);
```

### A full-fledged egg timer

Can you put it all together now and complete the implementation for a working
timer that counts down from x seconds to zero?

```javascript
var countDown = function(startTime) {
  console.log(startTime);

  return setInterval(function() {
    __--;
    console.log(__);
  }, __);
};

var setTimer = function(seconds) {
  var milliseconds = __ * __;
  console.log("Setting timer for " + __ + " seconds");

  var counterID = countDown(seconds);

  __(function() {
    console.log("Timer done!");
    clearInterval(__)
  }, __);
};

setTimer(3)
// should set a timer for 3 seconds
// and print each second until it stops
```
