# Node interview questions!

### What Is Node.js?

Node.js is a framework developed on Chrome’s V8 JavaScript engine that compiles the JavaScript directly into the native machine code.

### Major benefits of using Node.js?

| Features     | Description                                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------------------- |
| Fast         | Node.js is built on Google Chrome’s V8 JavaScript Engine which makes its library very fast in code execution. |
| Asynchronous | Node.js based server never waits (single threaded) for an API to return data thus making it asynchronous.     |
| Scalable     | It is highly scalable because of its event mechanism which helps the server to respond in a non-blocking way. |
| Open Source  | has an extensive open source community, which has contributed with some modules, like http and url.           |
| No Buffering | applications simply output the data in chunks and never buffer any data.                                      |

### What is the scope?

Scope determines the accessibility (visibility) of variables. The actual context of excecute.

-   Local scope
-   Global scope

If there are a variable without var, let or const it's set by default as a global scope variable

```
var global = 'global scope';
function localScope() {
    var local = 'localScope';
    global = 'globalScopeByDefault';
}
console.log(global);

```

### How do Node.js works?

It runs on a v8 environment. It works on a single-threaded event loop and a non-blocking I/O

### What do you understand by Event-driven programming?

Event-driven programming is a programming approach that heavily makes use of events for triggering various functions. An event can be anything like a mouse click, key press, etc. When an event occurs, a call back function is executed that is already registered with the element.

### What is an Event loop in Node.js and how does it work?

An event loop in Node.js handles all the asynchronous callbacks in an application.
Functions like setTimeout, http.get, and fs.readFile are called, Node.js executed the event loop and then proceeds with the further code without waiting for the output.

### Test pyramid

/ E2E \
/-------\
/Integration\
/-------------\
/ Unit Test \

### What is an error-first callback in Node.js?

Error-first callbacks in Node.js are used to pass errors and data. The very first parameter you need to pass to these functions has to be an error object while the other parameters represent the associated data.

### Explain the purpose of module.exports?

Is a module used to shifting all related functions into a single file. Is used to export `modelu.exports or exports.functionName` and import `required('file.js')` fuctions.

### List down the major security implementations within Node.js?

1. Authentications
1. Error Handling

### What's callback hell?

It typically contains multiple nested callback functions which in turn make the code hard to read and debug.

###### How to avoid it?

-   modularization: break callbacks into independent functions
-   use a control flow library, like async
-   use generators with Promises (Promises wrap an asynchronous action in an object, which can be passed around and told to do certain things when the action finishes or fails.)
-   use async/await

### Explain the concept of middleware in Node.js?

In an application’s request-response cycle these functions have access to various request & response objects along with the next function of the cycle.

-   Execute any type of code
-   Update or modify the request and the response objects
-   Finish the request-response cycle
-   Invoke the next middleware in the stack

### Differentiate between spawn() and fork() methods in Node.js?

The spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor.

The fork() in Node.js is a special instance of spawn() that executes a new instance of the V8 engine. This method simply means that multiple workers are running on a single Node code base for various task.

### What do you understand by global objects in Node.js?

Globals are the objects which are global in nature and are available in all the modules of the application. You can use these objects directly in your application, rather than having to include them explicitly.

### What's a stub?

Stubs are functions/programs that simulate the behaviors of components/modules.

### How assert works in Node.js?

Assert is used to write tests.

```
var assert = require('assert');
function mul(a, b) {
return a * b;
}
var result = mul(1,2);
assert( result === 2, 'one multiplied by two is two');
```

### Explain the purpose of ExpressJS

Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in the server-side applications.

### Explain the process variable

The process variable, just like the console variable, is available globally in Node. It provides various ways to inspect and manipulate the current program.

### Difference between process.nextTick() and setImmediate()?

both are functions of the Timers module which help in executing the code after a predefined period of time.
The **process.nextTick** function waits for the execution of action till the next pass around in the event loop or once the event loop is completed only then it will invoke the callback function.

The **setImmediate()** is used to execute a callback method on the next cycle of the event loop which eventually returns it to the event loop in order to execute the I/O operations.

### Explain the usage of a buffer class in Node.js?

Buffer class in Node.js is used for storing the raw data.
It is a global class that is easily accessible can be accessed in an application without importing a buffer module.
Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to handle octet streams.

### How does Node.js handle the child threads?

You can still make use of the child threads using spawn() for some specific asynchronous I/O tasks.
To use it, you have to include a module called ChildProcess explicitly.

### What is the use of NODE_ENV?

If the project is in the production stage, Node.js promotes the convention of making use of NODE_ENV variable to flag it.
when you set your NODE_ENV to production, your application tends to perform 3 times faster.

### Difference between readFile vs createReadStream in Node.js?

CreateReadStream is really effective for the processing of the large files.

### List down the various timing features of Node.js.

-   **setTimeout/clearTimeout** Used to schedule code execution after a designated amount of milliseconds.
-   **setInterval/clearInterval** Used to execute a block of code multiple times.
-   **setImmediate/clearImmediate** Used to execute code at the end of the current event loop cycle.
-   **process.nextTick** Used to schedule a callback function that needs to be invoked in the next iteration of the Event Loop.

### Explain the concept of Punycode in Node.js?

Is used for converting Unicode (UTF-8) string of characters into a basic ASCII string of characters.
`punycode = require('punycode');`

### Does Node.js provide any Debugger?

`node debug [script.js | -e "script" | <host> : <port> ]`

### Describe the exit codes of Node.js.

-   Uncaught fatal exception
-   Unused
-   Fatal Error
-   Internal Exception handler Run-time failure
-   Internal JavaScript Evaluation Failure

### Is cryptography supported in Node.js?

Yes, Node.js does support cryptography through a module called Crypto.
`const crypto = require'crypto');`

### How can you secure your HTTP cookies against XSS attacks?

-   HttpOnly - this attribute is used to help prevent attacks such as cross-site scripting since it does not allow the cookie to be accessed via JavaScript.
-   secure - this attribute tells the browser to only send the cookie if the request is being sent over HTTPS.

-   Using Express, with express-cookie session.
