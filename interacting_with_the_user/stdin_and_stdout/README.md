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
^C # this is what typing CTRL-C looks like in the shell
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

### Say hi and goodbye

Can you use the built-in methods to print a message on the screen?

```javascript
rl.__(__);
rl.__(__);
rl.close();
```

```shell
$ node input.js
# => should print:
# => Hello!Goodbye.%
```

No search suggestion. Take a gander through the [readline module
docs](http://nodejs.org/api/readline.html) - it is a small API and you should
find the appropriate method quickly.

### Repeat after me

So you can print text. Nice. Can you write a script that reads from `STDIN` and
echoes back whatever the user types in?

You will have to reference the
[events](http://nodejs.org/api/readline.html#readline_events) of the readline
module to figure out the problem of "how do I know when a user has typed
something in?"

```javascript
__.__("Echo time!");

rl.on(__, function(input) {
  __.__("Echo: " + input);
});
```

It should work like this:

```shell
$ node input.js
Echo time!
howdy # I typed this in
Echo: howdy # and then the script printed this
doody
Echo: doody
```

Note that there is a new line for each bit of input or output. How does that
work?

Search suggestion: `node print to stdout with newline`

### Let the user exit without CTL-C

Did you notice how the previous script had no way of knowing when it was done?
It would just keep going on and on if you let it. If you didn't already know,
you can press `CTL-C` to interrupt a process.

But sometimes its nice to provide keywords so that users can exit "gracefully"
without having to send an interrupt. Can you finish this exercise accordingly?

```javascript
__.__("Echo time!");
rl.on(__, function(input) {
  if (input === __ || input === "exit") {
    __.__("Goodbye!");
    rl.__();
  } else
    __.__("Echo: " + __);
  }
});
```

```shell
$ node input.js
Echo time!
lets do this
Echo: lets do this
ok enough
Echo: ok enough
quit
Goodbye!
$ # back to the command prompt
```

### Set a prompt character

When reading user input, it is often a good idea to signify to the user that the
program is waiting for them. This is called the `prompt`. In your shell, it is
probably the `$` character.

A prompt is just a way to say "your wish is my command...".

Can you add a prompt character to the script so that users know when to type?

```javascript
__.__("Echo time!");

rl.__("> ")
rl.__();

rl.on(__, function(input) {
  if (input === "quit" || input === "exit") {
    __.__("Goodbye!");
    rl.__();
  } else {
    __.__("Echo: " + input);
    rl.__();
  }
});
```

```shell
$ node input.js
Echo time!
> this is fun
Echo: this is fun
> but not that fun
Echo: but not that fun
> quit
Goodbye!
$
```

Search suggestion: `node readline use prompt with prompt character`

Also don't forget the power of searching _within_ web pages, for example by
using the Find command in a browser (usually CMD-F on a Mac). This way you can
search for words on a page, like the word `prompt` on the [readline module
docs](http://nodejs.org/api/readline.html).

### A closer-to-the-real-world example

Sometimes you want a custom prompt, something more specific than `> `.

Can you figure out how to make the following script function as desired,
requesting a username and password using the prompt?

```javascript
__.__("Logging into secure server...");

rl.__("username: ", function(input) {
  var username = input;

  rl.__("password: ", function(input) {
    var password = input;
    __.__("Logging in as '" + username + "' with password '" + password + "'");

    rl.close();
  });
});
```

```shell
$ node input.js
Logging into secure server...
username: admin # I typed "admin"
password: secure # and "secure"
Logging in as 'admin' with password 'secure'
```

There is a very useful method for just this feature in the readline module.

### Write your own REPL

A REPL (read-eval-print loop) is a common tool for learning and experimenting
with a programming language. In Ruby, we have the `irb` command. In node.js, you
can enter the `node` command with no arguments and it will open a REPL for you.

Let's build our own bare-bones REPL. Can you use the knowledge you've gained so
far to finish the script below?

```javascript
__.__("Dumb REPL");

rl.__("> ");
rl.__();

rl.on(__, function(input) {
  if (input === "quit" || input === "exit") {
    __.__("Goodbye!");
    rl.__();
    return;
  }

  var inputFunc = new Function("return " + input);
  var result = inputFunc();
  __.__( result );

  rl.__();
});
```

```shell
$ node input.js
Dumb REPL
> 1 + 1
2
> "foo".toUpperCase()
FOO
> quit
Goodbye!
$
```

Curious about that `new Function` business? That's called the
`function constructor`.

### Encrypt my echo

Do you know how a [Caesar Cipher](http://en.wikipedia.org/wiki/Caesar_cipher)
works? It is one of the easiest (and thus, not very secure) forms of encryption.

Can you use the `encrypt` function provided below to create a script that will
allow users to encrypt their own messages?

```javascript
var encrypt = function(str) {
  var encryptedStr = ""
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      var shiftedCharCode = charCode + 5; // shift letters up 5 (A => F)
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

__.__("CAESAR CIPHER");

rl.__("Enter message: ")
rl.__();

rl.on(__, function(input) {
  if (input === "quit" || input === "exit") {
    __.__("Goodbye!");
    rl.__();
    return;
  }

  var __ = __(input);

  __.__("Encrypted message: " + __);
  __.__("");

  rl.__();
});
```

```shell
$ node input.js
CAESAR CIPHER
Enter message: this is a big secret
Encrypted message: ymnx nx f gnl xjhwjy

Enter message: my favorite color is mauve
Encrypted message: rd kfatwnyj htqtw nx rfzaj

Enter message: dont tell anyone
Encrypted message: itsy yjqq fsdtsj

Enter message: quit
Goodbye!
$
```
