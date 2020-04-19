var user = {
    userName: 'Mr Bean',
    gender: 'Male',
    age: 21,
    showInfo: function() {
        console.log('userName: ' + this.userName + '\t gender: ' + this.gender + '\t age: ' + this.age)
    },
    location: {
        streetNumber: '1 Ba Trieu'
    }
}
var userName = ' Mr Bean global';

function show(u) {
    console.log('userNam: ' + u.userName)
    console.log('Gender: ' + u.gender + '\n age: ' + u.age + '\t address: ' + u.address)
    u.showInfo();
}
show(user);

function showLocation(u) {
    console.log('Street Number: ' + u.location.streetNumber)
}

showLocation(user);
showLocation({ location: { streetNumber: '10 Ba Trieu' } });

var a = 'userName';
console.log(user[a])

var view = function(u) {
    console.log('Gender: ' + u.gender + '\n age: ' + u.age)
}
view.userName = 'Son';
console.log(view.userName)
view(user)

function display() {
    b = 5;
    console.log(b)
}
display();
console.log(b)