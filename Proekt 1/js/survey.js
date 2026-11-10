"use strict";

const surveyForm = document.getElementById("survey-form");
const surveySuccess = document.getElementById("survey-success");

surveyForm.addEventListener("submit", function(event) {
    event.preventDefault();

    surveyForm.reset();

    surveySuccess.style.display = "block";

    surveySuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

surveyForm.addEventListener("reset", function() {
    surveySuccess.style.display = "none";
});
