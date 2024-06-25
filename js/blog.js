const backButton = document.getElementById('back');
const container = document.querySelector('.container');
const toggleButton = document.getElementById('darklightmode-toggle');

// navigate back to form on click of back button
backButton.addEventListener('click',function (event) {
    event.preventDefault();
    // set location back to form
    location.href = "index.html";
});

// set default mode to light

let mode = 'light';

// listen for click event on toggle button
toggleButton.addEventListener('click', function(event) {

    // If mode is light apply dark background and styles by setting class attribute
    if(mode==='light'){
        mode = 'dark';
        container.setAttribute('class','dark');
    }
    // Else apply light background and styles by removing class attribute
    else{
        mode = 'light';
        container.removeAttribute('class','dark');
    }

});
