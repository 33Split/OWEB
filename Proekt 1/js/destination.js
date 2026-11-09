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
        intro: "Discover the city of lights, famous landmarks, charming streets, and unforgettable experiences.",
        overview1: "Paris, the capital of France, is one of the most popular travel destinations in the world. Known for its beautiful architecture, historic landmarks, museums and charming streets, the city offers something for every visitor.",
        overview2: "From exploring the Eiffel Tower and the Louvre Museum to enjoying a walk along the Seine River, Paris   combines history, culture and modern city life. Its cafes, restaurants and shopping streets also make it a great destination for anyone looking to experience French culture.",
        likes: 125,
        dislikes: 12,
        attractions: [
            {
                name: "Eiffel Tower",
                image: "../images/destinations/paris/eiffel-tower.jpg",
                description: "One of the world's most recognizable landmarks, offering incredible views of Paris."
            },
            {
                name: "Louvre Museum",
                image: "../images/destinations/paris/louvre.jpg",
                description: "A world-famous museum home to thousands of works of art, including the Mona Lisa."
            },
            {
                name: "Notre-Dame Cathedral",
                image: "../images/destinations/paris/notre-dame.jpg",
                description: "A historic Gothic cathedral known for its architecture and cultural significance."
            },
            {
                name: "Arc de Triomphe",
                image: "../images/destinations/paris/arc-de-triomphe.webp",
                description: "A monumental arch commemorating French history, located at the end of the Champs-Elysees."
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
        intro: "Explore the Eternal City, known for its ancient ruins, impressive architecture, and rich history.",
        overview1: "Rome, the capital of Italy, is a city filled with ancient history, beautiful architecture and remarkable cultural landmarks. From the remains of the Roman Empire to its lively streets and traditional restaurants, Rome offers a unique travel experience.",
        overview2: "Visitors can explore the Colosseum, admire the Trevi Fountain and discover the Vatican. The city's charming squares, historic churches and Italian cuisine make it an unforgettable destination.",
        likes: 98,
        dislikes: 8,
        attractions: [
            {
                name: "Colosseum",
                image: "../images/destinations/rome/colosseum.jpg",
                description: "An ancient Roman amphitheatre that once hosted gladiator battles and public events."
            },
            {
                name: "Trevi Fountain",
                image: "../images/destinations/rome/trevi-fountain.jpg",
                description: "A famous Baroque fountain where visitors traditionally toss coins for good luck."
            },
            {
                name: "Pantheon",
                image: "../images/destinations/rome/pantheon.jpg",
                description: "A remarkably preserved ancient Roman temple known for its impressive dome."
            },
            {
                name: "St. Peter's Basilica",
                image: "../images/destinations/rome/st-peters-basilica.jpg",
                description: "A magnificent Renaissance church located in Vatican City."
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
        intro: "Experience Tokyo, a vibrant city where traditional Japanese culture meets modern technology and entertainment.",
        overview1: "Tokyo, the capital of Japan, is one of the world's largest and most exciting cities. Known for its futuristic skyline, busy shopping districts and advanced technology, Tokyo also preserves traditional temples, gardens and cultural customs.",
        overview2: "Visitors can explore the streets of Shibuya, enjoy traditional food and discover historic temples. From peaceful gardens to neon-lit entertainment districts, Tokyo offers a wide variety of experiences.",
        likes: 150,
        dislikes: 15,
        attractions: [
            {
                name: "Tokyo Tower",
                image: "../images/destinations/tokyo/tokyo-tower.jpg",
                description: "A famous red-and-white tower offering panoramic views of the city."
            },
            {
                name: "Senso-ji Temple",
                image: "../images/destinations/tokyo/senso-ji.jpg",
                description: "Tokyo's oldest Buddhist temple, located in the historic Asakusa district."
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
        intro: "Discover Santorini, a beautiful Greek island famous for white buildings, blue domes and breathtaking sea views.",
        overview1: "Santorini is one of Greece's most recognizable islands, known for its whitewashed houses, blue-domed churches and spectacular views of the Aegean Sea. Its villages are built along the edges of a volcanic caldera, creating some of the most famous landscapes in the Mediterranean.",
        overview2: "Visitors can explore traditional villages, relax on volcanic beaches and enjoy beautiful sunsets. Santorini is also known for its local cuisine, wineries and peaceful island atmosphere.",
        likes: 110,
        dislikes: 5,
        attractions: [
            {
                name: "Oia Village",
                image: "../images/destinations/santorini/oia.jpg",
                description: "A picturesque village famous for its white buildings and spectacular sunsets."
            },
            {
                name: "Fira",
                image: "../images/destinations/santorini/fira.jpg",
                description: "The island's lively capital, featuring shops, restaurants and beautiful caldera views."
            },
            {
                name: "Red Beach",
                image: "../images/destinations/santorini/red-beach.jpg",
                description: "A unique beach surrounded by impressive red volcanic cliffs."
            },
            {
                name: "Akrotiri",
                image: "../images/destinations/santorini/akrotiri.jpg",
                description: "An ancient archaeological site preserving the remains of a Minoan settlement."
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
        intro: "Escape to Bali, an island known for tropical beaches, lush rice terraces, temples and beautiful natural landscapes.",
        overview1: "Bali is an Indonesian island famous for its tropical scenery, traditional culture and welcoming atmosphere. Its landscape includes green rice terraces, volcanic mountains, waterfalls and beautiful beaches.",
        overview2: "Visitors can explore ancient temples, discover traditional villages and enjoy outdoor activities such as surfing and hiking. Bali also offers a variety of local food, relaxing resorts and vibrant cultural experiences.",
        likes: 140,
        dislikes: 10,
        attractions: [
            {
                name: "Uluwatu Temple",
                image: "../images/destinations/bali/uluwatu-temple.jpg",
                description: "A historic sea temple situated on a cliff overlooking the Indian Ocean."
            },
            {
                name: "Tegallalang Rice Terraces",
                image: "../images/destinations/bali/tegallalang.jpg",
                description: "Beautiful green rice fields arranged across the hills near Ubud."
            },
            {
                name: "Ubud Monkey Forest",
                image: "../images/destinations/bali/monkey-forest.jpg",
                description: "A natural forest sanctuary containing ancient temples and long-tailed macaques."
            },
            {
                name: "Mount Batur",
                image: "../images/destinations/bali/mount-batur.jpg",
                description: "An active volcano popular for sunrise hikes and panoramic views."
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
        intro: "Discover the Swiss Alps, a spectacular mountain region with snowy peaks, alpine villages and breathtaking scenery.",
        overview1: "The Swiss Alps are famous for their dramatic mountain landscapes, clear lakes and charming alpine villages. The region attracts visitors throughout the year, offering snowy winter scenery and green mountain trails during the warmer months.",
        overview2: "Travelers can enjoy skiing, hiking, mountain railways and beautiful viewpoints. Traditional villages and peaceful lakes make the Swiss Alps an ideal destination for nature lovers and outdoor enthusiasts.",
        likes: 130,
        dislikes: 7,
        attractions: [
            {
                name: "Matterhorn",
                image: "../images/destinations/swiss/matterhorn.jpg",
                description: "One of the most recognizable mountain peaks in the world, near the village of Zermatt."
            },
            {
                name: "Jungfraujoch",
                image: "../images/destinations/swiss/jungfraujoch.jpg",
                description: "A famous mountain destination offering spectacular views of the surrounding Alps."
            },
            {
                name: "Lake Lucerne",
                image: "../images/destinations/swiss/lake-lucerne.jpg",
                description: "A beautiful alpine lake surrounded by mountains and picturesque towns."
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
        intro: "Explore Norway's dramatic fjords, surrounded by towering mountains, waterfalls and peaceful coastal villages.",
        overview1: "Norway's fjords are among the most impressive natural landscapes in Europe. Formed by glaciers over thousands of years, these deep waterways are surrounded by steep mountains, green valleys and spectacular waterfalls.",
        overview2: "Visitors can explore the fjords by boat, hike through mountain landscapes and discover traditional Norwegian villages. The region is especially popular among travelers looking for peaceful scenery and outdoor adventures.",
        likes: 115,
        dislikes: 6,
        attractions: [
            {
                name: "Geirangerfjord",
                image: "../images/destinations/norway/geirangerfjord.jpg",
                description: "A spectacular fjord famous for its steep cliffs and impressive waterfalls."
            },
            {
                name: "Nærøyfjord",
                image: "../images/destinations/norway/naeroyfjord.jpg",
                description: "A narrow fjord surrounded by dramatic mountains and beautiful natural scenery."
            },
            {
                name: "Trolltunga",
                image: "../images/destinations/norway/trolltunga.jpg",
                description: "A famous rock formation extending over a mountain lake, reached by a challenging hike."
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
        intro: "Step into Kyoto, a historic Japanese city filled with traditional temples, peaceful gardens and beautiful cultural landmarks.",
        overview1: "Kyoto served as Japan's capital for more than a thousand years and remains one of the country's most important cultural destinations. The city is known for its traditional wooden streets, historic temples, gardens and seasonal scenery.",
        overview2: "Visitors can explore traditional districts, walk through bamboo forests and admire historic shrines. Kyoto is also famous for its tea culture, traditional cuisine and beautiful cherry blossoms during spring.",
        likes: 135,
        dislikes: 9,
        attractions: [
            {
                name: "Fushimi Inari Shrine",
                image: "../images/destinations/kyoto/fushimi-inari.jpg",
                description: "A famous shrine featuring thousands of red torii gates along a mountain trail."
            },
            {
                name: "Arashiyama Bamboo Grove",
                image: "../images/destinations/kyoto/arashiyama-bamboo.jpg",
                description: "A beautiful bamboo forest with walking paths surrounded by tall bamboo trees."
            },
            {
                name: "Kinkaku-ji",
                image: "../images/destinations/kyoto/kinkakuji.jpg",
                description: "The Golden Pavilion, a famous temple covered in gold leaf beside a peaceful pond."
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
        intro: "Experience Interlaken, a beautiful Swiss town surrounded by lakes, mountains and exciting outdoor activities.",
        overview1: "Interlaken is a popular destination in the Bernese Oberland region of Switzerland, situated between Lake Thun and Lake Brienz. Surrounded by the Swiss Alps, the town is known for its beautiful landscapes and outdoor adventure opportunities.",
        overview2: "Visitors can enjoy hiking, paragliding, boat trips and mountain excursions. Its location also makes it a convenient starting point for exploring nearby alpine villages and famous mountain viewpoints.",
        likes: 120,
        dislikes: 8,
        attractions: [
            {
                name: "Harder Kulm",
                image: "../images/destinations/interlaken/harder-kulm.jpg",
                description: "A popular viewpoint overlooking Interlaken and the surrounding mountain peaks."
            },
            {
                name: "Lake Brienz",
                image: "../images/destinations/interlaken/lake-brienz.jpg",
                description: "A turquoise alpine lake known for its clear water and beautiful mountain scenery."
            },
            {
                name: "Lake Thun",
                image: "../images/destinations/interlaken/lake-thun.jpg",
                description: "A scenic lake surrounded by mountains, castles and charming lakeside towns."
            },
            {
                name: "Jungfraujoch",
                image: "../images/destinations/interlaken/jungfraujoch.jpg",
                description: "A famous high-altitude destination offering views of glaciers and the surrounding Alps."
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
        intro: "Discover Chamonix, a mountain town at the foot of Mont Blanc, famous for skiing, hiking and alpine scenery.",
        overview1: "Chamonix is a popular mountain destination in southeastern France, located near the borders of Switzerland and Italy. It sits at the foot of Mont Blanc, the highest mountain in the Alps, and attracts visitors throughout the year.",
        overview2: "The town is known for skiing, mountaineering, hiking and spectacular mountain views. Visitors can explore alpine trails, ride mountain cable cars and enjoy the atmosphere of a traditional French mountain town.",
        likes: 105,
        dislikes: 6,
        attractions: [
            {
                name: "Aiguille du Midi",
                image: "../images/destinations/chamonix/aiguille-du-midi.jpg",
                description: "A famous mountain viewpoint reached by cable car, offering incredible views of the Alps."
            },
            {
                name: "Mer de Glace",
                image: "../images/destinations/chamonix/mer-de-glace.jpg",
                description: "One of France's largest glaciers, accessible by the scenic Montenvers railway."
            },
            {
                name: "Mont Blanc",
                image: "../images/destinations/chamonix/mont-blanc.jpg",
                description: "The highest mountain in the Alps, attracting climbers and visitors from around the world."
            },
            {
                name: "Chamonix Town Centre",
                image: "../images/destinations/chamonix/chamonix-centre.jpg",
                description: "A lively alpine town centre filled with shops, restaurants and traditional mountain architecture."
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
