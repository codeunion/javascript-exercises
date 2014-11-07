# STDIN and STDOUT

**Note:** to complete the following examples, you will need to write your
JavaScript code in a file called `input.js` and copy the following code at the
top:

```javascript
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

## Exercises

```javascript
rl.write("hi there")
rl.close()
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
