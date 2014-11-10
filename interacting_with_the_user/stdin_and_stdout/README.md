# STDIN and STDOUT

There are cases when it is useful to write programs that explicitly expect user
input from and will write output to a terminal.

Every process on \*nix systems is given a way to read input from what the user
types in and to print information to the screen. For example, opening the
Terminal app on your Mac starts a shell process which can read information that
you type in and also print information back at you. The part of the process that
reads text in is called `STDIN` and the part that writes text out is called
`STDOUT`.

Technically, these are called _file descriptors_, but we don't need to worry
about that level of detail at the moment. For now, you can think of them as how
text gets read "in" and printed "out".

This can be demonstrated most directly with the `cat` program, which can either
concatenate the contents of files or, when no files are supplied as arguments,
will read text line-by-line from `STDIN` and print it to `STDOUT`. Like this:

```shell
$ cat
hi # I typed "hi" into the Terminal and pressed "return"
hi # then it spits it right back at me
there # so
there # we can see
stop # that this line is going to STDIN
stop # and the response is STDOUT
that
that
seriously
seriously
bye
bye
^C
```

Let's play with `STDIN` and `STDOUT` in the context of node.js programs.

**Note:** to complete the following exercises, you will need to write your
JavaScript code in a file called `input.js` and copy the following code at the
top:

```javascript
var readline = require('readline'); // load the `readline` module

// create an interface instance to handle the input and output "streams"
var rl = readline.createInterface({
  input: process.stdin, // set the input to this process's STDIN
  output: process.stdout // and the output to this process's STDOUT
});
```

For the following exercises, you can assume that the above code already exists
in the file.

## Exercises

```javascript
rl.__(__);
rl.__(__);
rl.close();
```

```javascript
console.log("Echo time!");
rl.on('line', function(input) {
  console.log('Echo: ' + input);
});
```

```javascript
console.log("Echo time!");
rl.on('line', function(input) {
  if (input === "quit" || input === "exit") {
    console.log("Goodbye!");
    rl.close();
  }
  console.log('Echo: ' + input);
});
```

```javascript
console.log("Echo time!");
rl.setPrompt("> ")
rl.prompt();
rl.on('line', function(input) {
  if (input === "quit" || input === "exit") {
    console.log("Goodbye!");
    rl.close();
  }
  console.log('Echo: ' + input);
  rl.prompt();
});
```

```javascript
console.log("Logging into secure server...");
var username, password;
rl.question("username: ", function(input) {
  username = input;
  rl.question("password: ", function(input) {
    password = input;
    console.log("Logging in as '" + username + "' with password '" + password + "'");
    rl.close()
  });
});
```

```javascript
console.log("Dumb REPL");
rl.setPrompt("> ");
rl.prompt();
rl.on('line', function(input) {
  var inputFunc = new Function("return " + input);
  console.log(inputFunc())
  rl.prompt();
});
```

```javascript
var encrypt = function(str) {
  var encryptedStr = ""
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      var shiftedCharCode = charCode + 5;
      if (shiftedCharCode > 122) {
        shiftedCharCode -= 26;
      }
      encryptedStr += String.fromCharCode(shiftedCharCode);
    } else {
      encryptedStr += str[i];
    }
  };
  return encryptedStr;
};

console.log("CAESAR CIPHER");
rl.setPrompt("Enter message: ")
rl.prompt();
rl.on('line', function(input) {
  var encrypted = encrypt(input)
  console.log('Encrypted message: ' + encrypted);
  rl.prompt();
});
```
