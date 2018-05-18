// onScreen jQuery plugin v0.2.1
// (c) 2011-2013 Ben Pickles
//
// http://benpickles.github.io/onScreen
//
// Released under MIT license.
;
(function ($) {
    $.expr[":"].onScreen = function (elem) {
        var $window = $(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = $(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height

        return (top >= viewport_top && top < viewport_bottom) || (bottom > viewport_top && bottom <= viewport_bottom) || (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
})(jQuery);

// My Code
$('div.section').first().addClass('current');
$('a.scroll').on('click', function (e) {
    e.preventDefault();
    $('.current').removeClass('current');
    $('.section').filter(':onScreen').first().addClass('current');

    var top = $(this).offset();
    var height = $(window).height();
    var t = $(this).attr('id'),
        that = $(this);
    if (t === 'scrolldown' && top.top < height) {

        $('html, body').animate({
            scrollTop: $('.top').offset().top
        }, 'slow');
        return;
    }
    if (t === 'scrolldown' && $('.current').next('div.section').length > 0) {

        var $next = $('.current').next('.section');
        $('.current').removeClass('current');
        $next.addClass('current');
        $('html, body').animate({
            scrollTop: $('.current').offset().top
        }, 'slow');
        return;

    }
    if (t === 'scrollup' && $('.current')[0].getBoundingClientRect().top < 0) {
        $('html, body').animate({
            scrollTop: $('.current').offset().top
        }, 'slow');

        return;
    }

    if (t === 'scrollup' && $('.current').prev('div.section').length > 0) {
        var $prev = $('.current').prev('.section');
        $('.current').removeClass('current');
        $prev.addClass('current');
        $('html, body').animate({
            scrollTop: $('.current').offset().top
        }, 'slow');
        return;
    }
    if (t === 'scrollup' && $('.current').prev('div.top').length > 0) {

        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return;
    }
});