
const inputUsername = document.querySelector('#username');
const inputTitle = document.querySelector('#title');
const inputContent = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const feedback = document.querySelector('#feedback');

if (localStorage.getItem('blogposts') !==null) {
    entries = JSON.parse(localStorage.getItem('blogposts'));
}  else { entries = [];}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

let entries;
//throw error when input values are empty
if (inputUsername.value === '') {
 displayMessage('error', 'Username cannot be blank');
} else if (inputTitle.value === '') {
    displayMessage('error', 'Title cannot be blank');
} else if (inputContent.value === '') {
    displayMessage('error', 'Content cannot be blank');
}  else { getPost();
    console.log(entries);
    displayMessage('success', 'Post Submitted');

    window.location.href="blog.html";

}});

function displayMessage (type, message) {
    feedback.textContent = message;
}



//let entries = [];
function getPost() {

const post = {
entry: inputUsername.value, 
title: inputTitle.value,
content: inputContent.value,
}
entries.push(post)
localStorage.setItem('blogposts', JSON.stringify(entries));
}



