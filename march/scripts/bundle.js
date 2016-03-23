(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var smoothScroll = require('smoothscroll');

// var exampleBtn = $('a.down');
// exampleBtn.click(function(){
//     event.preventDefault();
//     var scrollTo = event.currentTarget.id;
//     var exampleDestination = document.querySelector('.' + scrollTo);
//     smoothScroll(exampleDestination);
// });

$(document).ready(function(){
    $('#fullpage').fullpage({
      scrollOverflow: true,
      scrollBar: true,
      anchors:['homePage', 'aboutPage', 'servicesPage', 'staffPage', 'newpatientsPage', 'contactPage']
    });

    var $watch = $('#home')
    var $nav = $('.navbar-default');
    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win.scroll(function () {
      console.log('test');
        if ($win.scrollTop() > winH - 70) {
            $nav.addClass("not-home");
            $nav.removeClass("home");
            $('.navbar img').attr('src', "../images/marchhct-logo-menu-white.png");
        } else {
            $nav.addClass("home");
            $nav.removeClass("not-home");
            $('.navbar img').attr('src', "../images/marchhct-logo-menu.png");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $win.height(); // you'll need the new height value
    });
});

},{}]},{},[1]);
