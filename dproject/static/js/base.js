document.addEventListener('DOMContentLoaded', nav)

function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-base');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}


window.addEventListener("load", function() {
    // alert(document.location.pathname)
    var string;
    switch (document.location.pathname) {
        case "/pasteditions":
            string = "edicoes-passadas-nav";
            break;
        case "/internships":
            string = "internships-nav";
            break;
        case "/partners":
            string = "partners-nav";
            break;
        }
    document.getElementById(string).getElementsByTagName('img')[0].style.opacity = "1";
});
// var containers = document.getElementsByClassName("nav-item-container")
// var items = 
// var items_img = document.getElementsByClassName("nav-risco");


// for (i = 0; i < containers.length; i++) {
//     containers[i].addEventListener("click", function () {
//     });
// }
