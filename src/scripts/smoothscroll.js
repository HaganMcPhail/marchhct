var smoothScroll = require('smoothscroll');

var exampleBtn = document.querySelector('a.about');
var exampleDestination = document.querySelector('#about');

// This function can easily be an onClick handler in React components
var handleClick = function(event) {
  event.preventDefault();
  alert('test');
  smoothScroll(exampleDestination);
};

exampleBtn.addEventListener('click', handleClick);
