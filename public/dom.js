var emailDiv = document.getElementById("emailDiv");
var buttonNext = document.getElementById("buttonNext");
var passwordDiv = document.getElementById("passwordDiv");
var buttonPrevious = document.getElementById("buttonPrevious");
var buttonNext2 = document.getElementById("buttonNext2");
var buttonPrevious2 = document.getElementById("buttonPrevious2");
var progress = document.getElementById("progress");

buttonNext.addEventListener("click", function () {
    emailDiv.classList.add("noDisplay");
    passwordDiv.classList.remove("noDisplay");
    progress.value = "50";
});
buttonPrevious.addEventListener("click", function () {
    emailDiv.classList.remove("noDisplay");
    passwordDiv.classList.add("noDisplay");
    progress.value = "0";
});
buttonNext2.addEventListener("click", function () {
    passwordDiv.classList.add("noDisplay");
    submitDiv.classList.remove("noDisplay");
    progress.value = "100";
    progress.classList.add("progressBarGreen");

});
buttonPrevious2.addEventListener("click", function () {
    passwordDiv.classList.remove("noDisplay");
    submitDiv.classList.add("noDisplay");
    progress.value = "50";
    progress.classList.remove("progressBarGreen");
});
