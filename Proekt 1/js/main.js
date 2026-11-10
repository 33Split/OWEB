"use strict";

const loginLink = document.getElementById("login-nav-link");
const loginForm = document.getElementById("login-form");

let currentUser = JSON.parse(localStorage.getItem("travelPlannerUser")) || null;

function updateLoginLink() {
    if (currentUser) {
        loginLink.textContent = "Welcome, " + currentUser.username;
        loginLink.title = "Click to log out";
    } else {
        loginLink.textContent = "Login";
        loginLink.title = "";
    }
}

loginLink.addEventListener("click", function(event) {
    event.preventDefault();

    if (currentUser) {
        currentUser = null;
        localStorage.removeItem("travelPlannerUser");

        updateLoginLink();

        alert("You have been logged out.");
    } else {
        $("#loginModal").modal("show");
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const email = document.getElementById("login-email").value.trim();

    currentUser = {
        username: username,
        email: email
    };

    localStorage.setItem("travelPlannerUser", JSON.stringify(currentUser));

    updateLoginLink();

    $("#loginModal").modal("hide");
    loginForm.reset();

    alert("Welcome, " + username + "!");
});

updateLoginLink();
