document.addEventListener('DOMContentLoaded', nav)

function nav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-base');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}


var containers = document.getElementsByClassName("nav-item-container")
var items = document.getElementsByClassName("nav-item");
var items_img = document.getElementsByClassName("nav-risco");

for (i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var line = items_img[0];

        if (answer.style.display === "block") {
            answer.style.display = "none";
            myimg.src = "static/assets/images/arrow-down.png";
        } else {
            answer.style.display = "block";

            myimg.src = "static/assets/images/arrow-up.png";
        }
    });
}
