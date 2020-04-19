function talkto(people) {
    var age = 8;
    return function(message) {
        debugger;
        console.log('Hi: ' + people + message + age)
    }
}

var hi = talkto('son');
hi('I love you')