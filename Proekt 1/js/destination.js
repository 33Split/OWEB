"use strict";

const destinations = [
    {
        id: 1,
        name: "Paris",
        country: "France",
        language: "French",
        currency: "Euro (EUR)",
        bestTime: "April - June",
        budget: "€100 - €150",
        heroImage: "../images/destinations/paris/paris-hero1.jpg",
        intro: "Discover Paris, the city of love, art, fashion and unforgettable landmarks.",
        overview1: "Paris is one of the most visited cities in the world, famous for its beautiful architecture, museums, cafes and romantic atmosphere.",
        overview2: "Visitors can explore world-famous landmarks, enjoy French cuisine and walk along the Seine while discovering the city's unique neighborhoods.",
        likes: 125,
        dislikes: 12,
        attractions: [
            {
                name: "Eiffel Tower",
                image: "../images/destinations/paris/eiffel-tower.jpg",
                description: "The most recognizable landmark in Paris, offering impressive views of the entire city."
            },
            {
                name: "Louvre Museum",
                image: "../images/destinations/paris/louvre.jpg",
                description: "One of the world's largest museums, home to famous artworks including the Mona Lisa."
            },
            {
                name: "Notre-Dame Cathedral",
                image: "../images/destinations/paris/notre-dame.jpg",
                description: "A historic Gothic cathedral known for its architecture and cultural importance."
            },
            {
                name: "Arc de Triomphe",
                image: "../images/destinations/paris/arc-de-triomphe.webp",
                description: "A famous monument located at the end of the Champs-Elysees."
            }
        ]
    },
    {
        id: 2,
        name: "Rome",
        country: "Italy",
        language: "Italian",
        currency: "Euro (EUR)",
        bestTime: "April - June, September - October",
        budget: "€80 - €130",
        heroImage: "../images/destinations/rome/rome.jpg",
        intro: "Explore Rome, a historic city filled with ancient ruins, beautiful architecture and Italian culture.",
        overview1: "Rome is one of the most historically important cities in Europe. Its streets are filled with ancient monuments, churches, fountains and impressive squares.",
        overview2: "Visitors can explore the remains of the Roman Empire, enjoy traditional Italian food and experience the lively atmosphere of the city.",
        likes: 98,
        dislikes: 8,
        attractions: [
            {
                name: "Colosseum",
                image: "../images/destinations/rome/colosseum.jpg",
                description: "An ancient amphitheatre where gladiatorial contests and public events once took place."
            },
            {
                name: "Trevi Fountain",
                image: "../images/destinations/rome/trevi-fountain.jpg",
                description: "A famous Baroque fountain where visitors traditionally throw coins for good luck."
            },
            {
                name: "Pantheon",
                image: "../images/destinations/rome/pantheon.jpg",
                description: "An ancient Roman temple famous for its enormous dome and central opening."
            },
            {
                name: "St. Peter's Basilica",
                image: "../images/destinations/rome/st-peters-basilica.jpg",
                description: "One of the most important churches in Christianity, located in Vatican City."
            }
        ]
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        language: "Japanese",
        currency: "Japanese Yen (JPY)",
        bestTime: "March - May, September - November",
        budget: "€90 - €140",
        heroImage: "../images/destinations/tokyo/tokyo.jpg",
        intro: "Experience Tokyo, a modern metropolis where traditional Japanese culture meets futuristic technology.",
        overview1: "Tokyo is Japan's capital and one of the largest metropolitan areas in the world. It is known for its skyscrapers, technology, shopping districts and traditional temples.",
        overview2: "The city offers something for everyone, from quiet gardens and historic shrines to busy streets, restaurants and entertainment districts.",
        likes: 150,
        dislikes: 15,
        attractions: [
            {
                name: "Tokyo Tower",
                image: "../images/destinations/tokyo/tokyo-tower.jpg",
                description: "A famous observation tower offering panoramic views of the Tokyo skyline."
            },
            {
                name: "Senso-ji Temple",
                image: "../images/destinations/tokyo/senso-ji.jpg",
                description: "Tokyo's oldest temple, located in the historic Asakusa district."
            },
            {
                name: "Shibuya Crossing",
                image: "../images/destinations/tokyo/shibuya-crossing.jpg",
                description: "One of the world's busiest pedestrian crossings, surrounded by shops and bright advertisements."
            },
            {
                name: "Meiji Shrine",
                image: "../images/destinations/tokyo/meiji-shrine.jpg",
                description: "A peaceful Shinto shrine surrounded by a large forest in the middle of Tokyo."
            }
        ]
    },
    {
        id: 4,
        name: "Santorini",
        country: "Greece",
        language: "Greek",
        currency: "Euro (EUR)",
        bestTime: "May - October",
        budget: "€100 - €160",
        heroImage: "../images/destinations/santorini/santorini.jpg",
        intro: "Discover Santorini, a Greek island known for its white buildings, blue domes and beautiful sunsets.",
        overview1: "Santorini is a volcanic island in the Aegean Sea, famous for its dramatic cliffs, traditional villages and spectacular views of the caldera.",
        overview2: "Visitors can relax on unique beaches, explore small villages, enjoy Greek food and watch the sunset over the sea.",
        likes: 110,
        dislikes: 5,
        attractions: [
            {
                name: "Oia",
                image: "../images/destinations/santorini/oia.jpg",
                description: "A picturesque village famous for its white buildings and spectacular sunsets."
            },
            {
                name: "Fira",
                image: "../images/destinations/santorini/fira.jpg",
                description: "The island's capital, featuring shops, restaurants and impressive caldera views."
            },
            {
                name: "Red Beach",
                image: "../images/destinations/santorini/red-beach.jpg",
                description: "A unique beach surrounded by dramatic red volcanic cliffs."
            },
            {
                name: "Akrotiri",
                image: "../images/destinations/santorini/akrotiri.jpg",
                description: "An ancient settlement preserved beneath volcanic ash."
            }
        ]
    },
    {
        id: 5,
        name: "Bali",
        country: "Indonesia",
        language: "Indonesian",
        currency: "Indonesian Rupiah (IDR)",
        bestTime: "April - October",
        budget: "€40 - €90",
        heroImage: "../images/destinations/bali/bali.jpg",
        intro: "Visit Bali, a tropical island known for its beaches, temples, rice terraces and natural beauty.",
        overview1: "Bali is one of Indonesia's most popular travel destinations. It offers tropical landscapes, traditional villages, beautiful beaches and a unique local culture.",
        overview2: "Visitors can explore ancient temples, hike volcanic mountains, relax by the ocean and discover the island's famous rice terraces.",
        likes: 140,
        dislikes: 10,
        attractions: [
            {
                name: "Uluwatu Temple",
                image: "../images/destinations/bali/uluwatu-temple.jpg",
                description: "A historic sea temple located on a cliff overlooking the Indian Ocean."
            },
            {
                name: "Tegallalang Rice Terraces",
                image: "../images/destinations/bali/tegallalang.jpg",
                description: "Beautiful green rice fields arranged across the hillsides."
            },
            {
                name: "Monkey Forest",
                image: "../images/destinations/bali/monkey-forest.jpg",
                description: "A natural forest sanctuary in Ubud that is home to hundreds of monkeys."
            },
            {
                name: "Mount Batur",
                image: "../images/destinations/bali/mount-batur.jpg",
                description: "An active volcano popular for sunrise hikes and views of the surrounding landscape."
            }
        ]
    },
    {
        id: 6,
        name: "Swiss Alps",
        country: "Switzerland",
        language: "German, French, Italian",
        currency: "Swiss Franc (CHF)",
        bestTime: "December - March, June - September",
        budget: "€120 - €200",
        heroImage: "../images/destinations/swiss/swiss-alps.webp",
        intro: "Explore the Swiss Alps, a spectacular mountain region known for its scenery and outdoor activities.",
        overview1: "The Swiss Alps are famous for their snow-covered peaks, mountain villages, clear lakes and scenic hiking trails.",
        overview2: "Visitors can enjoy skiing, hiking, mountain railways and breathtaking views throughout the year.",
        likes: 130,
        dislikes: 7,
        attractions: [
            {
                name: "Matterhorn",
                image: "../images/destinations/swiss/matterhorn.jpg",
                description: "One of the most recognizable mountain peaks in the world."
            },
            {
                name: "Jungfraujoch",
                image: "../images/destinations/swiss/jungfraujoch.jpg",
                description: "A famous mountain destination known as the Top of Europe."
            },
            {
                name: "Lake Lucerne",
                image: "../images/destinations/swiss/lake-lucerne.jpg",
                description: "A beautiful lake surrounded by mountains and picturesque towns."
            },
            {
                name: "Aletsch Glacier",
                image: "../images/destinations/swiss/aletsch-glacier.jpg",
                description: "The largest glacier in the Alps, surrounded by impressive mountain scenery."
            }
        ]
    },
    {
        id: 7,
        name: "Norwegian Fjords",
        country: "Norway",
        language: "Norwegian",
        currency: "Norwegian Krone (NOK)",
        bestTime: "May - September",
        budget: "€100 - €170",
        heroImage: "../images/destinations/norway/norwegian-fjords.jpg",
        intro: "Discover Norway's fjords, famous for their dramatic cliffs, deep blue waters and impressive landscapes.",
        overview1: "Norway's fjords are natural sea inlets surrounded by steep mountains and waterfalls. They create some of the most impressive landscapes in Northern Europe.",
        overview2: "Visitors can explore the region by boat, hike to mountain viewpoints and discover small villages surrounded by nature.",
        likes: 115,
        dislikes: 6,
        attractions: [
            {
                name: "Geirangerfjord",
                image: "../images/destinations/norway/geirangerfjord.jpg",
                description: "A spectacular fjord surrounded by steep mountains and famous waterfalls."
            },
            {
                name: "Nærøyfjord",
                image: "../images/destinations/norway/naeroyfjord.jpg",
                description: "A narrow fjord known for its dramatic scenery and peaceful surroundings."
            },
            {
                name: "Trolltunga",
                image: "../images/destinations/norway/trolltunga.jpg",
                description: "A famous rock formation that extends horizontally above a deep mountain lake."
            },
            {
                name: "Flåm",
                image: "../images/destinations/norway/flam.jpg",
                description: "A small village known for its scenic railway and beautiful fjord surroundings."
            }
        ]
    },
    {
        id: 8,
        name: "Kyoto",
        country: "Japan",
        language: "Japanese",
        currency: "Japanese Yen (JPY)",
        bestTime: "March - May, October - November",
        budget: "€70 - €120",
        heroImage: "../images/destinations/kyoto/kyoto.jpg",
        intro: "Experience Kyoto, a historic Japanese city filled with temples, gardens and traditional architecture.",
        overview1: "Kyoto was once Japan's capital and remains one of the country's most important cultural destinations. It is known for its temples, traditional streets and beautiful gardens.",
        overview2: "Visitors can explore historic shrines, walk through bamboo forests and experience traditional Japanese culture.",
        likes: 135,
        dislikes: 9,
        attractions: [
            {
                name: "Fushimi Inari Shrine",
                image: "../images/destinations/kyoto/fushimi-inari.jpg",
                description: "A famous shrine known for its thousands of red torii gates along mountain paths."
            },
            {
                name: "Arashiyama Bamboo Grove",
                image: "../images/destinations/kyoto/arashiyama-bamboo.jpg",
                description: "A peaceful bamboo forest with walking paths surrounded by tall bamboo."
            },
            {
                name: "Kinkaku-ji",
                image: "../images/destinations/kyoto/kinkakuji.jpg",
                description: "A famous golden temple reflected in the pond surrounding it."
            },
            {
                name: "Kiyomizu-dera",
                image: "../images/destinations/kyoto/kiyomizu-dera.jpg",
                description: "A historic Buddhist temple offering beautiful views over Kyoto."
            }
        ]
    },
    {
        id: 9,
        name: "Interlaken",
        country: "Switzerland",
        language: "German",
        currency: "Swiss Franc (CHF)",
        bestTime: "June - September",
        budget: "€110 - €180",
        heroImage: "../images/destinations/interlaken/interlaken.webp",
        intro: "Visit Interlaken, a Swiss town surrounded by lakes and mountains, popular for outdoor adventures.",
        overview1: "Interlaken is located between Lake Thun and Lake Brienz, with the Swiss Alps providing a spectacular background.",
        overview2: "The area is popular for hiking, paragliding, boat trips and other outdoor activities, making it a great destination for adventure lovers.",
        likes: 120,
        dislikes: 8,
        attractions: [
            {
                name: "Harder Kulm",
                image: "../images/destinations/interlaken/harder-kulm.jpg",
                description: "A mountain viewpoint offering panoramic views of Interlaken and the surrounding lakes."
            },
            {
                name: "Lake Brienz",
                image: "../images/destinations/interlaken/lake-brienz.jpg",
                description: "A beautiful turquoise lake surrounded by mountains and small villages."
            },
            {
                name: "Lake Thun",
                image: "../images/destinations/interlaken/lake-thun.jpg",
                description: "A large alpine lake known for its scenic boat trips and lakeside towns."
            },
            {
                name: "Jungfraujoch",
                image: "../images/destinations/interlaken/jungfraujoch.jpg",
                description: "A high-altitude mountain destination with spectacular views of the Alps."
            }
        ]
    },
    {
        id: 10,
        name: "Chamonix",
        country: "France",
        language: "French",
        currency: "Euro (EUR)",
        bestTime: "December - March, June - September",
        budget: "€100 - €160",
        heroImage: "../images/destinations/chamonix/chamonix.jpg",
        intro: "Discover Chamonix, a French mountain town located at the foot of Mont Blanc.",
        overview1: "Chamonix is a popular destination for mountain lovers, surrounded by impressive peaks, glaciers and alpine scenery.",
        overview2: "Visitors can enjoy skiing, hiking, cable car rides and views of Mont Blanc, the highest mountain in the Alps.",
        likes: 105,
        dislikes: 6,
        attractions: [
            {
                name: "Aiguille du Midi",
                image: "../images/destinations/chamonix/aiguille-du-midi.jpg",
                description: "A famous mountain viewpoint reached by cable car, offering spectacular alpine views."
            },
            {
                name: "Mer de Glace",
                image: "../images/destinations/chamonix/mer-de-glace.jpg",
                description: "A large glacier that can be explored through scenic mountain railway trips."
            },
            {
                name: "Mont Blanc",
                image: "../images/destinations/chamonix/mont-blanc.jpg",
                description: "The highest mountain in the Alps and one of Europe's most famous peaks."
            },
            {
                name: "Chamonix Centre",
                image: "../images/destinations/chamonix/chamonix-centre.jpg",
                description: "The town centre, filled with shops, restaurants and traditional alpine architecture."
            }
        ]
    }
];

const urlParams = new URLSearchParams(window.location.search);
const destinationId = Number(urlParams.get("id"));

const destination = destinations.find(function(destination) {
    return destination.id === destinationId;
});

if (destination) {
    displayDestination();

    document.getElementById("like-button").addEventListener("click", function() {
        voteForDestination("like");
    });

    document.getElementById("dislike-button").addEventListener("click", function() {
        voteForDestination("dislike");
    });

    displayRating();

    displayComments();

    document.getElementById("comment-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("comment-name");
        const textInput = document.getElementById("comment-text");

        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (name === "" || text === "") {
            return;
        }

        addComment(name, text);
        this.reset();
    });

} else {
    window.location.href = "destinations.html";
}

function displayDestination() {
    document.title = destination.name + " | Travel Planner";

    document.getElementById("destination-hero").style.backgroundImage =
        `url("${destination.heroImage}")`;

    document.getElementById("destination-country").textContent = destination.country;
    document.getElementById("destination-name").textContent = destination.name;
    document.getElementById("destination-intro").textContent = destination.intro;

    document.getElementById("overview-title").textContent =
        "Discover " + destination.name;
    document.getElementById("destination-guide-link").href =
    "guides.html#" + destination.name.toLowerCase().replaceAll(" ", "-") + "-guide";

    document.getElementById("overview-description-1").textContent =
        destination.overview1;

    document.getElementById("overview-description-2").textContent =
        destination.overview2;

    document.getElementById("info-country").textContent = destination.country;
    document.getElementById("info-language").textContent = destination.language;
    document.getElementById("info-currency").textContent = destination.currency;
    document.getElementById("info-best-time").textContent = destination.bestTime;
    document.getElementById("info-budget").textContent = destination.budget;

    document.getElementById("attractions-description").textContent =
        "Discover some of the most famous places worth visiting in " +
        destination.name + ".";

    displayAttractions();
}

function displayAttractions() {
    const attractionsContainer = document.getElementById("attractions-container");

    attractionsContainer.innerHTML = "";

    destination.attractions.forEach(function(attraction) {
        attractionsContainer.innerHTML += `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="attraction-card">
                    <div class="attraction-image">
                        <img src="${attraction.image}" alt="${attraction.name}">
                    </div>
                    <div class="attraction-content">
                        <h5>${attraction.name}</h5>
                        <p>${attraction.description}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

function getDestinationRating() {
    let ratings = JSON.parse(localStorage.getItem("destinationRatings")) || {};

    if (!ratings[destination.id]) {
        ratings[destination.id] = {
            likes: destination.likes,
            dislikes: destination.dislikes,
            userVote: null
        };

        localStorage.setItem("destinationRatings", JSON.stringify(ratings));
    }

    return ratings[destination.id];
}

function displayRating() {
    const rating = getDestinationRating();

    document.getElementById("like-count").textContent = rating.likes;
    document.getElementById("dislike-count").textContent = rating.dislikes;
}

function voteForDestination(vote) {
    let ratings = JSON.parse(localStorage.getItem("destinationRatings")) || {};

    if (!ratings[destination.id]) {
        ratings[destination.id] = {
            likes: destination.likes,
            dislikes: destination.dislikes,
            userVote: null
        };
    }

    const rating = ratings[destination.id];

    if (rating.userVote === vote) {
        return;
    }

    if (rating.userVote === "like") {
        rating.likes--;
    } else if (rating.userVote === "dislike") {
        rating.dislikes--;
    }

    if (vote === "like") {
        rating.likes++;
    } else if (vote === "dislike") {
        rating.dislikes++;
    }

    rating.userVote = vote;

    localStorage.setItem("destinationRatings", JSON.stringify(ratings));

    displayRating();
}

function getDestinationComments() {
    const allComments = JSON.parse(localStorage.getItem("destinationComments")) || {};

    return allComments[destination.id] || [];
}

function displayComments() {
    const commentsContainer = document.getElementById("comments-container");
    const comments = getDestinationComments();

    commentsContainer.innerHTML = "";

    if (comments.length === 0) {
        commentsContainer.textContent =
            "No comments yet. Be the first to share your experience!";
        return;
    }

    comments.forEach(function(comment) {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");

        const commentHeader = document.createElement("div");
        commentHeader.classList.add("comment-header");

        const name = document.createElement("strong");
        name.textContent = comment.name;

        const date = document.createElement("span");
        date.textContent = comment.date;

        const text = document.createElement("p");
        text.textContent = comment.text;

        commentHeader.appendChild(name);
        commentHeader.appendChild(date);

        commentItem.appendChild(commentHeader);
        commentItem.appendChild(text);

        commentsContainer.appendChild(commentItem);
    });
}

function addComment(name, text) {
    const allComments = JSON.parse(localStorage.getItem("destinationComments")) || {};

    if (!allComments[destination.id]) {
        allComments[destination.id] = [];
    }

    const newComment = {
        name: name,
        text: text,
        date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    };

    allComments[destination.id].push(newComment);

    localStorage.setItem("destinationComments", JSON.stringify(allComments));

    displayComments();
}
