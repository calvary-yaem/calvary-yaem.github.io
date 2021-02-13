$(document).ready(function() {

    // Fade out navbar on scroll
    var previousScroll = 0,
        headerOrgOffset = $('.navbar').height() / 2;

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll && currentScroll > headerOrgOffset) {
            $('.navbar').fadeOut();
        } else if (currentScroll < previousScroll && currentScroll <= headerOrgOffset) {
            $('.navbar').fadeIn();
        }
        previousScroll = currentScroll;
    });
});