b = 9;

console.log(b);

var name = 'Tuan';

function call() {

    var name = 'son'
    console.log(this.name)

    read();

}

function read() {

    console.log('-------------' + this.name)
    console.log(this.name = 'c')
    var name = 'Soooon'
    console.log('-------------' + this.name)
}
call()
console.log(name)