var name = 2;
bar();


function foo() {
    console.log(name); // 3  (not 2!)
}

function bar() {
    var name = 3;
    foo();
}