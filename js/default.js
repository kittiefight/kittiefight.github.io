$(function() {
    // Homepage.html text rotation
    $(".js-fadeInUp").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "fadeInUp",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function() {
            // Called after the entrance animation is executed.
        }
    });
});

$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: false,
        cssEase: 'linear'
    });
});