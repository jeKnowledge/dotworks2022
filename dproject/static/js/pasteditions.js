var slideCount;
var slideWidth;
var sliderUlWidth;
jQuery(document).ready(function ($) {

    /*
        setInterval(function () {
            moveRight();
        }, 5000);
    */

    slideCount = $('#slider ul li').length;
    slideWidth = $('#slider ul li').width();
    sliderUlWidth = slideCount * slideWidth;


    $('#slider').css({
        width: slideWidth,
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 800, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 800, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

$('#slider').height(200 + $('#slider ul li img').height());
if (window.innerWidth < 1000) {
    var newtop = 140 + $('#slider ul li img').height();

    $('.btn-bar').css('top', newtop + 'px');
    $('#slider').height(200 + $('#slider ul li img').outerHeight());

    $('.gallery-container').height(250 + $('#slider ul li img').outerHeight());
}
window.addEventListener('resize', function (event) {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
});
$(window).resize(function () {
    if (window.innerWidth < 1000) {

        var newtop = 140 + $('#slider ul li img').outerHeight();

        $('.btn-bar').css('top', newtop + 'px');
        $('#slider').height(300 + $('#slider ul li img').outerHeight());
        $('.gallery-container').height($('#slider').outerHeight());

    } else {

        $('.btn-bar').css('top', '50%');
        $('#slider').height(150 + $('#slider ul li img').outerHeight());
        $('.gallery-container').height($('#slider').outerHeight());

    }
    slideCount = $('#slider ul li').length;
    slideWidth = $('#slider ul li').width();
    sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({
        width: slideWidth,
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    moveLeft = function () {
        $('#slider ul').animate({
            left: +slideWidth
        }, 800, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    moveRight = function () {
        $('#slider ul').animate({
            left: -slideWidth
        }, 800, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

});
