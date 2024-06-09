const body = document.querySelector('body');
const blogContainer = document.querySelector('main');
const container = document.querySelector('.container');
const toggleButton = document.querySelector('#toggle-theme');
const allEl = document.querySelector('*');


let mode = 'light';
//Dark mode button

toggleButton.addEventListener('click', function() {
if (mode === 'light') {
    mode = 'dark';
    allEl.classList.add('dark');
}  else {
    mode= 'light';
    allEl.classList.remove('dark');
}
}); 



//pulling input data from local storage into new blog page
 const storedEntries = JSON.parse(localStorage.getItem('blogposts'));

 console.log(storedEntries);

 for (let i=0; i < storedEntries.length; i++) {
 
   // entries[i].entry
    //entries[i].title
    //entries[i].content 

 const article= document.createElement('article');
 const postSubject = document.createElement('h2');
 const userName = document.createElement('h3');
 const content = document.createElement('p');
 
 postSubject.textContent= `${storedEntries[i].title}`;
 article.appendChild(postSubject);
 blogContainer.appendChild(article);

 userName.textContent= `${storedEntries[i].entry}`; 
 article.appendChild(userName);
 blogContainer.appendChild(article);

content.textContent= `${storedEntries[i].content}`;
article.appendChild(content);
blogContainer.appendChild(article);

 }

