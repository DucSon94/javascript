function foo(a) {
    var b = a * 2;

    function bar(c) {
        console.log(a, b, c);

    };
    bar(c);
}

var c = 5;
//var a = 6;
foo(c);