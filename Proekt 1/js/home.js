"use strict";

const destinationLikes = [
    { id: 1, likes: 125 },
    { id: 2, likes: 98 },
    { id: 3, likes: 150 },
    { id: 4, likes: 110 }
];

function displayDestinationLikes() {
    const ratings = JSON.parse(localStorage.getItem("destinationRatings")) || {};

    destinationLikes.forEach(function(destination) {
        const savedRating = ratings[destination.id];

        const likes = savedRating ? savedRating.likes : destination.likes;

        document.getElementById("likes-" + destination.id).textContent =
            likes + " likes";
    });
}
displayDestinationLikes();

window.addEventListener("storage", function(event) {
    if (event.key === "destinationRatings") {
        displayDestinationLikes();
    }
});