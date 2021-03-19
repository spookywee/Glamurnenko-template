

$('.mobile-nav__bar').click(function () {
    $('.nav-container').css('left', '0');
})
$('.mobile-nav__close').click(function () {
    $('.nav-container').css('left', '-500px');
})

$(function(){
    $(".up-btn").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);    
    });
});

$(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('.top-header').addClass('fixed-top');
            $('.top-header').addClass('top-header-fixed');
            $('.top-header').css('top', '0px');
        } else if ($(this).scrollTop() < 140) {
            $('.top-header').removeClass('fixed-top');
            $('.top-header').removeClass('top-header-fixed');
            $('.top-header').css('top', '-100px');
        }
    });
});