function evalScope(str) {
    eval("var abc");
    b = 3;
    console.log("str: " + str + " b: " + b);

}
var str = "hello";
evalScope(str);

function show() {
    //console.log(c);
    function view() {
        d = 6;
        console.log(d);
    }
    view();
}
show();

function change(d) {
    d = 9;

}
var e = 10;
change(e);
console.log(e);