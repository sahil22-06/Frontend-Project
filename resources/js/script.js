$(document).ready(function () {

    /* Sticky navigation hide/show */
    $('#features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
    })

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate(
            { scrollTop: $('#plans').offset().top }, 1000
        );
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate(
            { scrollTop: $('#features').offset().top }, 1000
        );
    })

    /* Navigation scroll animation */
    /* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */ 
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        }
    );

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Collapse nav */
    $('.js--nav-icon').click(function () {
        // option 2) var icon = $(".js--nav-icon").children("i");
        var icon = $(".js--nav-icon i");
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        icon.toggleClass("ion-navicon-round");
        icon.toggleClass("ion-close-round");
    });

    /* Smooth logo resizing on scroll */
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.logo').css({
            'transform': 'scale(0.8)',
            'transition': 'transform 0.3s ease'
        });
    } else {
        $('.logo').css({
            'transform': 'scale(1)',
            'transition': 'transform 0.3s ease'
        });
    }
});

});
