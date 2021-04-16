/************* Navigation Effect *************/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("nav").addClass("my-nav-class");
        }
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("my-nav-class");
        }
    })
});

/************* Navigation closes onClick *************/
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    })
});

/************* Services WOW *************/
$(function () {
    new WOW().init();
});

/************* Work Image Magnifier *************/
$(function () {
    $('.img-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/************* Team Carousel *************/
$(function () {
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 6
            }
        }
    });
});

/************* Testimonial Carousel *************/
$(function () {
    $('#customers-testimonials').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/************* Counter Effect *************/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/************* Client Carousel *************/
$(function () {
    $('#client-wrapper').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});