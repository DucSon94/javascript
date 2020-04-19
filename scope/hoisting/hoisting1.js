//foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
    // ...
    console.log("hello");
};


foo();