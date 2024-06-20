// Selecting an element by ID
let element = document.getElementById('myElement');

// Changing the content of the selected element
element.innerHTML = 'Hello, DOM!';

// Adding a click event listener to a button
let button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
