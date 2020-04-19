function updateAvatar(url, onSuccess) {
    console.log('dang tai anh den url: ' + url);
    var a = 5;
    onSuccess(a);
}

updateAvatar('facebook.com', (a) => {
    console.log(a);
})

setTimeout('aaa', 3000)