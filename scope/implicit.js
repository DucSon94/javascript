// var e
// console.log(e);
// e = 5;
// console.log(e);
// var c;
// console.log(this.d)
// console.log(c)
// console.log(b);

// var ten = 'aa'
// var user = {

//     name: ten,
//     show: function() {
//         console.log(name);
//     }
// }
// user.show();


var user2 = {
    first: 'Khoa',
    two: 'Nguyen',

    show: function() {
        debugger;
        var first = 'Phong';
        var u = this;

        console.log('first: ' + this.first + '\t two: ' + this.two);

        function showName() {
            //debugger;
            // var first = 'son';
            // var two = 'duc';
            console.log('first: ' + u.first);

        }
        showName();
    }


}
var first = 'Khoa';
user2.show()

var name2 = 'Duc'

function say() {
    debugger;
    var name2 = '1son';
    print();
}

function print() {
    console.log(this.name2);
}
say();