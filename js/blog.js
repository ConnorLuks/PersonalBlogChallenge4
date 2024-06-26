const backButton = document.getElementById('back'); /* return button doc */
const container = document.querySelector('.container'); /* slider button doc */
const toggleButton = document.getElementById('darklightmode-toggle');  /* as with the others links back to blog.html */

backButton.addEventListener('click',function (event) { /* returns to blog entry main page */
    event.preventDefault();
    location.href = "index.html"; 

});

let mode = 'light'; /* automatically set to light mode, made attempts to reverse but online references provided conflicting code examples, I stuck with this method. Do Not Alter. */

toggleButton.addEventListener('click', function(event) { /* when slider is clicked, the following occurs */

    if(mode==='light'){ /* transitions to dark mode and follows dark modes css */
        mode='dark';
        container.setAttribute('class','dark');
    }

    else{
        mode='light';
        container.removeAttribute('class','dark');
    }

});