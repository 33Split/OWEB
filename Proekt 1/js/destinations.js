"use strict";

const allDestinations = [
    {
        id: 1,
        name: "Paris",
        country: "France",
        category: "city",
        price: 200,
        likes: 125,
        dislikes: 12,
        image: "../images/destinations/paris/paris.jpg"
    },
    {
        id: 2,
        name: "Rome",
        country: "Italy",
        category: "historical",
        price: 180,
        likes: 98,
        dislikes: 8,
        image: "../images/destinations/rome/rome.jpg"
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        category: "city",
        price: 250,
        likes: 150,
        dislikes: 15,
        image: "../images/destinations/tokyo/tokyo.jpg"
    },
    {
        id: 4,
        name: "Santorini",
        country: "Greece",
        category: "beach",
        price: 220,
        likes: 110,
        dislikes: 5,
        image: "../images/destinations/santorini/santorini.jpg"
    },
    {
        id: 5,
        name: "Bali",
        country: "Indonesia",
        category: "beach",
        price: 270,
        likes: 140,
        dislikes: 10,
        image: "../images/destinations/bali/bali.jpg"
    },
    {
        id: 6,
        name: "Swiss Alps",
        country: "Switzerland",
        category: "nature",
        price: 240,
        likes: 130,
        dislikes: 7,
        image: "../images/destinations/swiss/swiss-alps.webp"
    },
    {
        id: 7,
        name: "Norwegian Fjords",
        country: "Norway",
        category: "nature",
        price: 210,
        likes: 115,
        dislikes: 6,
        image: "../images/destinations/norway/norwegian-fjords.jpg"
    },
    {
        id: 8,
        name: "Kyoto",
        country: "Japan",
        category: "historical",
        price: 255,
        likes: 135,
        dislikes: 9,
        image: "../images/destinations/kyoto/kyoto.jpg"
    },
    {
        id: 9,
        name: "Interlaken",
        country: "Switzerland",
        category: "adventure",
        price: 230,
        likes: 120,
        dislikes: 8,
        image: "../images/destinations/interlaken/interlaken.webp"
    },
    {
        id: 10,
        name: "Chamonix",
        country: "France",
        category: "adventure",
        price: 190,
        likes: 105,
        dislikes: 6,
        image: "../images/destinations/chamonix/chamonix-card.webp"
    }
];

let displayedDestinationIds = JSON.parse(localStorage.getItem("displayedDestinationIds"));

if (displayedDestinationIds === null) {
    displayedDestinationIds = allDestinations.map(destination => destination.id);

    localStorage.setItem(
        "displayedDestinationIds",
        JSON.stringify(displayedDestinationIds)
    );
}

const destinationsContainer = document.getElementById("destinations-container");
const addDestinationSelect = document.getElementById("add-destination-select");
const travelDestinationSelect = document.getElementById("travel-destination");

let currentCategory = "all";
let currentSearch = "";
let currentSort = "popularity";

function displayDestinations() {

    destinationsContainer.innerHTML = "";

    let displayedDestinations = allDestinations.filter(
        destination => displayedDestinationIds.includes(destination.id)
    );

    if (currentCategory !== "all") {
        displayedDestinations = displayedDestinations.filter(
            destination => destination.category === currentCategory
        );
    }

    displayedDestinations = displayedDestinations.filter(
        destination =>
            destination.name.toLowerCase().includes(currentSearch) ||
            destination.country.toLowerCase().includes(currentSearch)
    );

    if (currentSort === "popularity") {
        displayedDestinations.sort((a, b) => b.likes - a.likes);
    }
    else if (currentSort === "price-asc") {
        displayedDestinations.sort((a, b) => a.price - b.price);
    }
    else if (currentSort === "price-desc") {
        displayedDestinations.sort((a, b) => b.price - a.price);
    }
    else if (currentSort === "name") {
        displayedDestinations.sort((a, b) => a.name.localeCompare(b.name));
    }

    for (let destination of displayedDestinations) {
        let card = `
            <div class="col-lg-4 col-md-6 mb-4 destination-item">
                <a href="destination.html?id=${destination.id}" class="destination-link">
                    <div class="destination-card">
                        <div class="destination-image">
                            <img src="${destination.image}" alt="${destination.name}">

                            <button class="destination-remove-btn"
                                data-id="${destination.id}"
                                type="button"
                                title="Remove destination">
                                <img src="../images/trash-bin.png" alt="Remove">
                            </button>

                            <div class="destination-overlay">
                                <h5>${destination.name}</h5>
                                <p>${destination.country}</p>
                            </div>
                        </div>

                        <div class="destination-card-info">
                            <span>From €${destination.price}</span>
                            <span>${destination.likes} likes</span>
                        </div>
                    </div>
                </a>
            </div>
        `;

        destinationsContainer.innerHTML += card;
    }
    if (displayedDestinations.length === 0) {
        destinationsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p>No destinations found.</p>
            </div>
        `;
    }
}

const searchInput = document.getElementById("destination-search");
const searchButton = document.getElementById("search-destinations");

searchButton.addEventListener("click", function() {
    currentSearch = searchInput.value.trim().toLowerCase();
    displayDestinations();
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        currentCategory = button.dataset.category;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayDestinations();
    });
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        currentSearch = searchInput.value.trim().toLowerCase();
        displayDestinations();
    }
});

const sortSelect = document.getElementById("sort-destinations");

sortSelect.addEventListener("change", function() {
    currentSort = sortSelect.value;
    displayDestinations();
});

destinationsContainer.addEventListener("click", function(event) {

    let removeButton = event.target.closest(".destination-remove-btn");

    if (removeButton) {
        event.preventDefault();
        event.stopPropagation();

        let destinationId = Number(removeButton.dataset.id);

        displayedDestinationIds = displayedDestinationIds.filter(
            id => id !== destinationId
        );

        localStorage.setItem(
            "displayedDestinationIds",
            JSON.stringify(displayedDestinationIds)
        );

        displayDestinations();
        populateAddDestinationSelect();
        populateTravelDestinationSelect();
    }
});

function populateAddDestinationSelect() {
    addDestinationSelect.innerHTML =
        '<option value="">Select a destination</option>';

    let removedDestinations = allDestinations.filter(
        destination => !displayedDestinationIds.includes(destination.id)
    );

    for (let destination of removedDestinations) {
        let option = `
            <option value="${destination.id}">
                ${destination.name}
            </option>
        `;
        addDestinationSelect.innerHTML += option;
    }
}

const confirmAddDestinationButton = document.getElementById("confirm-add-destination");

confirmAddDestinationButton.addEventListener("click", function() {

    let destinationId = Number(addDestinationSelect.value);

    if (destinationId === 0) {
        return;
    }

    displayedDestinationIds.push(destinationId);

    localStorage.setItem(
        "displayedDestinationIds",
        JSON.stringify(displayedDestinationIds)
    );

    displayDestinations();
    populateAddDestinationSelect();

    addDestinationSelect.value = "";

    $("#addDestinationModal").modal("hide");
    populateTravelDestinationSelect();

});

displayDestinations();
populateAddDestinationSelect();
populateTravelDestinationSelect();

function populateTravelDestinationSelect() {
    travelDestinationSelect.innerHTML =
        '<option value="">Select a destination</option>';

    let displayedDestinations = allDestinations.filter(
        destination => displayedDestinationIds.includes(destination.id)
    );

    for (let destination of displayedDestinations) {
        let option = `
            <option value="${destination.id}">
                ${destination.name}
            </option>
        `;

        travelDestinationSelect.innerHTML += option;
    }
}

const travelersInput = document.getElementById("travelers-count");
const tripDaysInput = document.getElementById("trip-days");
const transportInput = document.getElementById("transport-cost");
const accommodationInput = document.getElementById("accommodation-cost");
const foodInput = document.getElementById("food-cost");
const otherInput = document.getElementById("other-cost");
const calculateButton = document.getElementById("calculate-travel-cost");
const travelCostResults = document.getElementById("travel-cost-results");

calculateButton.addEventListener("click", function() {

    let travelers = Number(travelersInput.value);
    let days = Number(tripDaysInput.value);

    let transport = Number(transportInput.value);
    let accommodation = Number(accommodationInput.value);
    let food = Number(foodInput.value);
    let other = Number(otherInput.value);

    let destinationId = Number(travelDestinationSelect.value);

    let destination = allDestinations.find(
        destination => destination.id === destinationId
    );

    if (!destination ||
        !Number.isFinite(travelers) ||
        !Number.isFinite(days) ||
        !Number.isFinite(transport) ||
        !Number.isFinite(accommodation) ||
        !Number.isFinite(food) ||
        !Number.isFinite(other) ||
        travelers < 1 || days < 1 ||
        transport < 0 || accommodation < 0 ||
        food < 0 || other < 0) {

        travelCostResults.innerHTML = "Please enter valid values.";
        return;
    }

    let costPerPerson = destination.price +
        transport +
        accommodation * (days - 1) +
        food * days +
        other;

    let totalCost = costPerPerson * travelers;

    travelCostResults.innerHTML = `
        <h5>Estimated Travel Cost for ${destination.name}</h5>
        <p>Base destination cost: €${destination.price}</p>
        <p>Additional expenses per person: €${(costPerPerson - destination.price).toFixed(2)}</p>
        <p>Cost per person: €${costPerPerson.toFixed(2)}</p>
        <p>Number of travelers: ${travelers}</p>
        <h4>Total cost: €${totalCost.toFixed(2)}</h4>
    `;
});
