/**
 * @function flooper
 *
 * @param {String|HTMLElement} flooperElement - flooper container, defaults to '.js-flooper'
 * @param {Object} [options] - containing the props described here at #options-and-defaults
 */



let myFlooper = new flooper('.js-flooper', {
    speed: 0.7,
}); // you can ommit paramenter if used 'js-flooper' in HTML 
myFlooper.init();

var slideCount;
var slideWidth;
var slideHeight;
var sliderUlWidth;

jQuery(document).ready(function ($) {

    var slideshow = setInterval(function () {
        moveRight();
    }, 10000);

    $('a.control_prev').click(function () {
        clearInterval(slideshow);
        moveLeft();
        slideshow = setInterval(function () {
            moveRight();
        }, 10000);
    });

    $('a.control_next').click(function () {
        clearInterval(slideshow);
        moveRight();
        slideshow = setInterval(function () {
            moveRight();
        }, 10000);
    });

    slideCount = $('#slider ul li').length;
    slideWidth = $('#slider ul li').width();
    slideHeight = $('#slider ul li').height();
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




});

var cont = document.getElementsByClassName("faq-container")
var question = document.getElementsByClassName("question");
var question_img = document.getElementsByClassName("icon");

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var myimg = this.getElementsByTagName('img')[0];
        var abre = this.nextElementSibling;
        var answer = this.nextElementSibling;
        var img = this.nextElementSibling;
        var cont_faq = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
            myimg.src = "static/assets/images/arrow-down.png";
        } else {
            answer.style.display = "block";

            myimg.src = "static/assets/images/arrow-up.png";
        }
    });
}



// var circlev = document.getElementById("circle-vermelho");
// var circlea = document.getElementById("circle-azul");
// window.addEventListener('scroll', function () {
//     circlea.style.width = 98 + window.pageYOffset / 10 + 'px';
//     circlea.style.height = 98 + window.pageYOffset / 10 + 'px';
//     circlev.style.width = 98 + window.pageYOffset / 10 + 'px';
//     circlev.style.height = 98 + window.pageYOffset / 10 + 'px';

// })


var vids = $("video");
$.each(vids, function () {
    this.controls = false;
});


let allContent = document.querySelectorAll('#slider li');
$('#slider').width($('#carousel-testemunhos').outerWidth());
var maxHeight = 0;
// loop through all content classes
for (let content of allContent) {
    // display the content if the class has the same data-attribute as the button 

    $(content).width($('#carousel-testemunhos').outerWidth());

    if (maxHeight < $(content).outerHeight()) {
        maxHeight = $(content).outerHeight();

    }

}
maxHeight = maxHeight + 20;

$('#slider').height(maxHeight);
$('#slider ul li').height(maxHeight);

$('#slider ul').height(maxHeight);

$('#carousel-testemunhos').height(maxHeight);

window.addEventListener('resize', function (event) {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
});

$(window).resize(function () {
    var newWidth = window.innerWidth;

    slideCount = $('#slider ul li').length;
    slideWidth = $('#slider ul li').width();
    slideHeight = $('#slider ul li').height();
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

    let allContent = document.querySelectorAll('#slider li');
    //allContent.querySelectorAll('.quote-container');
    $('#slider').width($('#carousel-testemunhos').outerWidth());
    var maxHeight = 0;
    // loop through all content classes
    for (let content of allContent) {
        // display the content if the class has the same data-attribute as the button 

        $(content).width($('#carousel-testemunhos').outerWidth());

        if (maxHeight < $(content).children('.quote-container').height()) {
            maxHeight = $(content).children('.quote-container').height();

        }

    }
    maxHeight = maxHeight + 30;
    if (maxHeight < 224 && newWidth > 900) {
        maxHeight = 224;
    }
    maxHeight = maxHeight + 20;
    $('#slider').height(maxHeight);
    $('#slider ul').height(maxHeight);
    $('#slider ul li').height(maxHeight);
    $('#carousel-testemunhos').height(maxHeight);

});
