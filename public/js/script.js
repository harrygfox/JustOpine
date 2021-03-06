// tests found in test/qunit/script-tests.js

// landing page slide effects
$(document).ready(function() {
    $(document.body).addClass("fade-in");
});

function slideEffect (direction) {
    if (direction === "right") {
        $(".landing-container-firstview").animate({
               left: '-100%'
           }, 300, function() {
               $(".landing-container-firstview").css('display', 'none');
               $(".landing-container-firstview").appendTo('.landingcontainer');

               $(".landing-container-secondview").css({
                   display: 'block',
                   position: 'relative'
               });

               $(".landing-container-secondview").animate({
                   left: '0%'
               }, 300);
           });
    } else if (direction === "left") {
        $(".landing-container-secondview").animate({
               left: '100%'
           }, 300, function() {
               $(".landing-container-secondview").css('display', 'none');
               $(".landing-container-secondview").appendTo('.landingcontainer');

               $(".landing-container-firstview").css({
                   display: 'block',
                   position: 'relative'
               });

               $(".landing-container-firstview").animate({
                //    right: '-150%',
                   left: '0%'
               }, 300);
           });
    }
}

$(".sign-in").on('click', function() {
    slideEffect("right");
});

$(".landing-back-icon").on('click', function() {
    slideEffect("left");
});

// logout

$(".logout").on('click', function() {
    $.ajax({
      url: '/logout',
      type: 'POST',
      success: function(){
        window.location.href = '/';
      }
    });
});

// mobile nav

$(".hamburger").on('click', function() {
    $(".mobile-nav-component-div").slideToggle();
    $("nav").toggleClass("box-shadow");
});

$(window).on('resize', function() {
    if ($(window).width() > 699) {
        $(".mobile-nav-component-div").css('display', 'none');
        $("nav").addClass("box-shadow");
    }
});

// lightbox

function activateLightBox (toadd) {
    $(toadd).css("display", "block");
    $("div").first().addClass("overlay");
}

function deactivateLightBox (toremove) {
    $(toremove).css("display", "none");
    $("div").first().removeClass("overlay");
}

$(".add-class").on('click', function() {
    activateLightBox(".add-class-lightbox");
});

$(".add-student").on('click', function() {
    activateLightBox(".add-student-lightbox");
});

$(".exit-button-class").on('click', function() {
    deactivateLightBox(".add-class-lightbox");
});

$(".exit-button-student").on('click', function() {
    deactivateLightBox(".add-student-lightbox");
});

// limiting threewords input to three words

$('.threewords').keyup(function () {
    var input = this.value.split(" ").filter(function(e) {
        return e !== ' ';
    }).filter(function(e) {
        return e !== '';

    });
    if (input.length > 3){
        $(".threewords").css('color', 'red');
    }
    if (this.value.split(" ").length < 4) {
        $(".threewords").css('color', '#1A1A1A');
    }
});

// registering line breaks in assignment text
