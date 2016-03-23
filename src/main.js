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
