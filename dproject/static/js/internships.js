// grab all the buttons
let Buttons = document.getElementsByClassName("internship");

//--------------------------------------------------------


$('.internship').on('click', function (event) {
    var $anchor = $(this);
    if (window.innerWidth > 900) {

        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top - 180 + "px"
        }, 1500);
    } else {
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80 + "px"
        }, 1500);
    }
    event.preventDefault();
});

//--------------------------------------------------------






for (let button of Buttons) {
    // listen for a click event 

    button.addEventListener('click', (e) => {
        // et = event target
        const et = e.target;
        // slect active class
        const active = document.querySelector(".active");
        // check for the button that has active class and remove it
        if (active) {
            active.classList.remove("active");
        } else {
            // add active class to the clicked element 
            et.classList.add("active");
        }

        // select all classes with the name content
        let allContent = document.querySelectorAll('.info-panel');

        // loop through all content classes
        for (let content of allContent) {
            // display the content if the class has the same data-attribute as the button 
            if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
                content.style.display = "flex";
                $('.filter-button ').css("z-index", "1");
                if (content.clientHeight + $('.filter-button').height() >= $('#internships-column').height() && content.clientHeight + $('.filter-button').height() >= $('.filter-column').height()) {
                    $('#internships-section').height($(content).outerHeight() + $('.filter-button').outerHeight());
                    $('.filter-column').height($(content).outerHeight());
                } else if (content.clientHeight <= $('#internships-column').height()) {
                    $(content).height($('#internships-column').outerHeight());


                }
                var span = document.getElementsByClassName("close")[content.getAttribute('data-number') - 1];

                span.onclick = function () {
                    content.style.display = "none";
                    $('.filter-button ').css("z-index", "0");

                    if ($('.filter-column').height() > $('#internships-column').height()) {
                        if ($('#internships-column').height() < originalHeight) {
                            $('.filter-column').height(originalHeight);
                        } else {
                            $('.filter-column').height($('#internships-column').outerHeight());
                        }
                        $('#internships-section').height($('.filter-column').outerHeight());

                    } else {
                        $('#internships-section').height($('#internships-column').outerHeight());
                    }
                }
            }
            // if it's not equal then hide it.
            else {
                content.style.display = "none";
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', filter)

function filter() {
    const burger = document.querySelector('.filter-button');
    const filtercol = document.querySelector('.filter-column');

    burger.addEventListener('click', () => {
        filtercol.classList.toggle('show')
        burger.classList.toggle('show');
    })
}

if ($('.filter-column').height() > $('#internships-column').height()) {
    $('#internships-section').height($('.filter-column').outerHeight());

} else if ($('#internships-column').height() > $('.filter-column').height()) {

    $('.filter-column').height($('#internships-column').outerHeight());

}
var originalHeight;
var originalFilterHeight;
$(document).ready(function () {
    originalHeight = Math.max($('.filter-column').outerHeight(), $('#internships-column').outerHeight());
    originalFilterHeight = $('.filter-column').outerHeight();
    if ($('#internships-column').height() > $('#internships-section').height()) {
        $('#internships-section').height($('#internships-column').outerHeight());
    }
    if (originalHeight > $('#internships-column').height()) {
        if ($('.filter-column').height() > originalHeight) {
            $('.filter-column').height(originalHeight);
        }

        $('#internships-section').height(originalHeight);


    } else if ($('#internships-container').height() > $('.filter-column').height()) {

        $('.filter-column').height($('#internships-section').outerHeight());


    }
});
const info = document.querySelector('#internships-section');
const filtercol = document.querySelector('.filter-column');


info.addEventListener('touchstart', handleTouchStart, false);
info.addEventListener('touchmove', handleTouchMove, false);


var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            filtercol.classList.toggle('show')
        } else {
            /* right swipe */
            filtercol.classList.toggle('show')
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};



window.addEventListener('resize', function (event) {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
});

$(window).resize(function () {


    if ($('#internships-column').height() > $('#internships-section').height()) {
        $('#internships-section').height($('#internships-column').outerHeight());
    }


    if (originalHeight > $('#internships-column').height()) {
        if ($('.filter-column').height() > originalHeight) {
            $('.filter-column').height(originalHeight);
        }

        $('#internships-section').height(originalHeight);
        if (originalFilterHeight < originalHeight && $('#internships-container').outerHeight() < originalHeight) {
            if (originalFilterHeight < $('#internships-container').outerHeight()) {
                $('#internships-section').height($('#internships-container').outerHeight());
                $('.filter-column').height($('#internships-container').outerHeight());


            } else {

                $('#internships-section').height(originalFilterHeight);
                $('.filter-column').height(originalFilterHeight);
            }

            //originalHeight = Math.max($('.filter-column').outerHeight(), $('#internships-column').outerHeight());

        }

    } else if ($('#internships-container').height() > $('.filter-column').height()) {

        $('#internships-section').height($('#internships-container').outerHeight());
        $('.filter-column').height($('#internships-section').outerHeight());



    }
    if ($('.filter-column').height() > originalFilterHeight && $('#internships-container').height() < originalFilterHeight) {
        $('#internships-section').height(originalFilterHeight);
        $('.filter-column').height(originalFilterHeight);
    }

    originalHeight = Math.max($('.filter-column').outerHeight(), $('#internships-column').outerHeight());

    let allContent = document.querySelectorAll('.info-panel');

    // loop through all content classes
    for (let content of allContent) {
        // display the content if the class has the same data-attribute as the button 
        if (content.style.display == "flex") {

            $(content).height($(content.children[0]).outerHeight());

            if (content.clientHeight + $('.filter-button').height() >= $('#internships-column').height() && content.clientHeight + $('.filter-button').height() >= $('.filter-column').height()) {
                $('#internships-section').height($(content).outerHeight() + $('.filter-button').outerHeight());
                $('.filter-column').height($(content).outerHeight());
            } else if (content.clientHeight <= $('#internships-column').height()) {
                $(content).height($('#internships-column').outerHeight());


            }
            /*if (748 > $(content).height() + $('.filter-button').height()) {
                if ($('#internships-column').height() > $('#internships-section').height()) {
                    $('#internships-section').height($('#internships-column').outerHeight());
                }
                if ($('.filter-column').height() > 748) {
                    $('.filter-column').height(748);
                }

            }*/
        }

    }
});
