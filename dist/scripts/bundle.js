(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (root, smoothScroll) {
  'use strict';

  // Support RequireJS and CommonJS/NodeJS module formats.
  // Attach smoothScroll to the `window` when executed as a <script>.

  // RequireJS
  if (typeof define === 'function' && define.amd) {
    define(smoothScroll);

  // CommonJS
  } else if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = smoothScroll();

  } else {
    root.smoothScroll = smoothScroll();
  }

})(this, function(){
'use strict';

// Do not initialize smoothScroll when running server side, handle it in client:
if (typeof window !== 'object') return;

// We do not want this script to be applied in browsers that do not support those
// That means no smoothscroll on IE9 and below.
if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }

// Get the top position of an element in the document
var getTop = function(element) {
    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
    if(element.nodeName === 'HTML') return -window.pageYOffset
    return element.getBoundingClientRect().top + window.pageYOffset;
}
// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
var position = function(start, end, elapsed, duration) {
    if (elapsed > duration) return end;
    return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
}

// we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window
var smoothScroll = function(el, duration, callback, context){
    duration = duration || 500;
    context = context || window;
    var start = window.pageYOffset;

    if (typeof el === 'number') {
      var end = parseInt(el);
    } else {
      var end = getTop(el) - 60;
    }

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){window.setTimeout(fn, 15);};

    var step = function(){
        var elapsed = Date.now() - clock;
        if (context !== window) {
        	context.scrollTop = position(start, end, elapsed, duration);
        }
        else {
        	window.scroll(0, position(start, end, elapsed, duration));
        }

        if (elapsed > duration) {
            if (typeof callback === 'function') {
                callback(el);
            }
        } else {
            requestAnimationFrame(step);
        }
    }
    step();
}

var linkHandler = function(ev) {
    ev.preventDefault();

    if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
    // using the history api to solve issue #1 - back doesn't work
    // most browser don't update :target when the history api is used:
    // THIS IS A BUG FROM THE BROWSERS.
    // change the scrolling duration in this call
    smoothScroll(document.getElementById(this.hash.substring(1)), 500, function(el) {
        location.replace('#' + el.id)
        // this will cause the :target to be activated.
    });
}

// We look for all the internal links in the documents and attach the smoothscroll function
document.addEventListener("DOMContentLoaded", function () {
    var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'), a;
    for(var i=internal.length; a=internal[--i];){
        a.addEventListener("click", linkHandler, false);
    }
});

// return smoothscroll API
return smoothScroll;

});

},{}],2:[function(require,module,exports){
var smoothScroll = require('smoothscroll');

var exampleBtn = $('a.down');
exampleBtn.click(function(){
    event.preventDefault();
    var scrollTo = event.currentTarget.id;
    var exampleDestination = document.querySelector('.' + scrollTo);
    smoothScroll(exampleDestination);
});

$(document).ready(function(){
    var $watch = $('#home')
    var $nav = $('.navbar-default');
    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win.scroll(function () {
        if ($win.scrollTop() > winH - 70) {
            //not home
            $nav.addClass("not-home");
            $nav.removeClass("home");
            // $('.navbar').removeClass('slideIn');
            $('.navbar img').attr('src', "../images/marchhct-logo-menu-white.png");
        } else {
            //home
            $nav.addClass("home");
            $nav.removeClass("not-home");
            // $('.navbar').addClass('slideIn');
            $('.navbar img').attr('src', "../images/marchhct-logo-menu.png");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $win.height(); // you'll need the new height value
    });

    var staff = {
        russshannon: '<div class="col-xs-12 col-sm-7"><p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p><ul><li>Coordinator, Oak Arbor (dual diagnosis/addiction residential facility)</li><li>Owner, Primary Therapist, March Counseling</li></ul></p><p>&nbsp; &nbsp; &nbsp; &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p></div><div class="col-xs-12 col-sm-5"><h2>Behind The Scenes</h2><p>&nbsp; &nbsp; &nbsp; &nbsp; It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>',
        shannon: '<div class="col-xs-12 col-sm-7"><p>&nbsp; &nbsp; &nbsp; &nbsp; Hello! I am so glad you stopped in to visit our site. I am a Licensed Professional Counselor and have been practicing for 14 years. I received a Bachelors Degree from the University of Southern Mississippi and a Masters degree from Mississippi State University. I have worked with individuals and families in a variety of settings:</p><p><ul><li>Clinical Director, Diamond Grove (Acute Psychiatric facility for children and adolescents)</li><li>Therapist, MS State University Counseling Center</li><li>Coordinator, Oak Arbor (dual diagnosis/addiction residential facility)</li><li>Owner, Primary Therapist, March Counseling</li></ul></p><p>&nbsp; &nbsp; &nbsp; &nbsp; Whether you are struggling with marital issues, depression, parenting struggles, marital conflict or sexual identity issues, I am eager to be a part of your journey. God has given me the desire to run alongside of you during this challenging race in your life. No matter what the issue, my goal is to help you find the solution that best works for you and your relationship with Christ.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; I received great clinical training and vow to utilize that training when serving my clients. I personally feel that true healing requires a spiritual component. True healing comes from learning and understanding our choices in a manner that circles us back to our creator, strengthening our relationship with Him through humility and personal growth.</p></div><div class="col-xs-12 col-sm-5"><h2>Behind The Scenes</h2><p>&nbsp; &nbsp; &nbsp; &nbsp; Being a counselor is just one of the many things God has me doing right now. I am first a Christ-follower, second a wife to my wonderful husband Russ and a mother to our fantastic children (Gage, Karmen and Korey). I feel that all of these roles are a calling from God and I enjoy each of them greatly!</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Our family worships at Vineyard Baptist Church in Petal Ms, where my husband serves as the worship pastor. We love being involved in missions. As a family, we feel God calls us to go and "teach the good news to all nations." When we are not participating foreign missions, we participate in missions locally. March is a mission arena in itself! We believe that through March God transform lives...one life at a time.</p></div>',
        john: '<div class="col-xs-12 col-sm-7"><p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p><ul><li>Coordinator, Oak Arbor (dual diagnosis/addiction residential facility)</li><li>Owner, Primary Therapist, March Counseling</li></ul></p><p>&nbsp; &nbsp; &nbsp; &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p></div><div class="col-xs-12 col-sm-5"><h2>Behind The Scenes</h2><p>&nbsp; &nbsp; &nbsp; &nbsp; It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>',
        love: '<div class="col-xs-12 col-sm-7"><p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p><ul><li>Coordinator, Oak Arbor (dual diagnosis/addiction residential facility)</li><li>Owner, Primary Therapist, March Counseling</li></ul></p><p>&nbsp; &nbsp; &nbsp; &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p></div><div class="col-xs-12 col-sm-5"><h2>Behind The Scenes</h2><p>&nbsp; &nbsp; &nbsp; &nbsp; It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>',
        missy: '<div class="col-xs-12 col-sm-7"><p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p><ul><li>Coordinator, Oak Arbor (dual diagnosis/addiction residential facility)</li><li>Owner, Primary Therapist, March Counseling</li></ul></p><p>&nbsp; &nbsp; &nbsp; &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p><p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p></div><div class="col-xs-12 col-sm-5"><h2>Behind The Scenes</h2><p>&nbsp; &nbsp; &nbsp; &nbsp; It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p></div>',
    }
    $.each( staff, function( key, value ) {
        if (key === 'russshannon') {
            $('.staff-text-area').html(value);
        }
    });
    $('.img-name-box').first().addClass('selected-staff');
    $('.img-name-box').click(function(){
        var staffName = $(this).attr('staff');
        $.each( staff, function( key, value ) {
            if (key === staffName) {
                $('.staff-text-area').html(value);
            }
        });
        $('.img-name-box').removeClass('selected-staff');
        $(this).addClass('selected-staff');
    });

    $('.acc-def').click(function(e) {
        e.preventDefault();
    });

    $('.my-slider').unslider({
        arrows: {
        	//  Unslider default behaviour
        	prev: '<a class="unslider-arrow prev"><div class="img-name-box" staff="missy"><img src="../images/missy.png" alt="" /><br><i class="fa fa-arrow-left"></i></div></a>',
        	next: '<a class="unslider-arrow next"><div class="img-name-box" staff="shannon"><img src="../images/shannon.png" alt="" /><br><i class="fa fa-arrow-right"></i></div></a>'
        },
        infinite: true,
        nav: false,
        activeClass: 'unslider-active',
        animation: 'horizontal'
    }).on('unslider.change', function() {
        var staffMember = $('.my-slider li.unslider-active .img-name-box');
        staffMember.addClass('selected-staff');
        var staffName = staffMember.attr('staff');
        var nextStaff = $('.my-slider li.unslider-active').next().children().attr('staff');
        var prevStaff = $('.my-slider li.unslider-active').prev().children().attr('staff');
        if (nextStaff === undefined) {
            nextStaff = 'shannon'
        } else if  (prevStaff === undefined) {
            prevStaff = 'john'
        }
        //console.log(staffMember);
        $.each( staff, function( key, value ) {
            if (key === staffName) {
                $('.staff-text-area').html(value);
            }
        });
        $('a.prev').html('<div class="img-name-box" staff="missy"><img src="../images/'+prevStaff+'.png" alt="" /><br><i class="fa fa-arrow-left"></i></div>');
        $('a.next').html('<div class="img-name-box" staff="missy"><img src="../images/'+nextStaff+'.png" alt="" /><br><i class="fa fa-arrow-right"></i></div>');
    });

    $('a.unslider-arrow').click(function(){
        $('a.unslider-arrow').hide(0, function(){
            setTimeout(function(){
                $('a.unslider-arrow').fadeIn();
            }, 500);
        });
    });

});

},{"smoothscroll":1}]},{},[2]);
