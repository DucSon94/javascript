var a = 2;

(function IIFE(def) { // hàm IIFE có nhần vào 1 tham số,tham số truyền vào ở đây là hàm def và hàm nay có nhận vào 1 tham sô và ở đây chính là tham số window
    def(window);
})(function def(global) {

    var a = 3;
    console.log(a); // 3
    console.log(global.a); // 2

});


undefined = true; // setting a land-mine for other code! avoid!
console.log(typeof undefined)

(function IIFE(undefined) {

    var a;
    if (a === undefined) {
        console.log("Undefined is safe here!");
    }

})();