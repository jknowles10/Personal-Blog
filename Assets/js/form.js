
const inputUsername = document.querySelector('#username');
const inputTitle = document.querySelector('#title');
const inputContent = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    getPost();
    console.log(entries);
});

let entries = [];
function getPost() {

const post = {
entry: inputUsername.value, 
title: inputTitle.value,
content: inputContent.value,
}
entries.push(post)
localStorage.setItem('blogposts', JSON.stringify(entries));
}

