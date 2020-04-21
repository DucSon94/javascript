var a = 'hello';

function say() {
    var a = 'hello';

    print(a);
}
say();

function print(a) {
    console.log(this.a)
}



function updateAvatar(url, onSuccess) {
    console.log('dang tai anh den url: ' + url);
    var a = 5;
    onSuccess(a);
}

updateAvatar('facebook.com', (a) => {
        console.log(a);
    })
    // test :D aa
    //fsffs
setTimeout('aaa', 3000)