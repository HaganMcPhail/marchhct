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
        	prev: '<a class="unslider-arrow prev"><span class="glyphicon glyphicon-chevron-left"></i></span>',
        	next: '<a class="unslider-arrow next"><span class="glyphicon glyphicon-chevron-right"></i></span>'
        },
        infinite: true,
        nav: false,
        activeClass: 'unslider-active',
        animation: 'horizontal'
    }).on('unslider.change', function() {
        var staffMember = $('.my-slider li.unslider-active .img-name-box');
        staffMember.addClass('selected-staff');
        var staffName = staffMember.attr('staff');
        console.log(staffMember);
        $.each( staff, function( key, value ) {
            if (key === staffName) {
                $('.staff-text-area').html(value);
            }
        });
    });

    $('a.unslider-arrow').click(function(){
        $('a.unslider-arrow').hide(0, function(){
            setTimeout(function(){
                $('a.unslider-arrow').fadeIn();
            }, 500);
        });
    });

});
