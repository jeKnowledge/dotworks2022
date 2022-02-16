var cont = document.getElementsByClassName("faq-container")
var question = document.getElementsByClassName("question");
var question_img = document.getElementsByClassName("icon");

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var myimg = this.getElementsByTagName('img')[0];
        var answer = this.nextElementSibling;


        if (answer.style.display === "block") {

            answer.style.display = "none";
            myimg.src = "static/assets/arrow-faq-down.svg";
        } else {
            answer.style.display = "block";
            myimg.src = "static/assets/arrow-faq-up.svg";
        }
    });
}
