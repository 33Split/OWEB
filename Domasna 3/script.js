"use strict";

let drivers = [
    {
        name: "Max Verstappen",
        team: "Red Bull Racing",
        speed: 98,
        skill: 97,
        tires: "Soft",
        initialTires: "Soft",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Charles Leclerc",
        team: "Ferrari",
        speed: 98,
        skill: 92,
        tires: "Hard",
        initialTires: "Hard",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Lewis Hamilton",
        team: "Ferrari",
        speed: 91,
        skill: 100,
        tires: "Soft",
        initialTires: "Soft",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Lando Norris",
        team: "McLaren",
        speed: 99,
        skill: 93,
        tires: "Hard",
        initialTires: "Hard",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Oscar Piastri",
        team: "McLaren",
        speed: 98,
        skill: 91,
        tires: "Soft",
        initialTires: "Soft",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "George Russell",
        team: "Mercedes",
        speed: 96,
        skill: 94,
        tires: "Hard",
        initialTires: "Hard",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Kimi Antonelli",
        team: "Mercedes",
        speed: 100,
        skill: 85,
        tires: "Soft",
        initialTires: "Soft",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Fernando Alonso",
        team: "Aston Martin",
        speed: 88,
        skill: 100,
        tires: "Hard",
        initialTires: "Hard",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Carlos Sainz",
        team: "Williams",
        speed: 94,
        skill: 96,
        tires: "Soft",
        initialTires: "Soft",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    },
    {
        name: "Pierre Gasly",
        team: "Alpine",
        speed: 94,
        skill: 95,
        tires: "Hard",
        initialTires: "Hard",
        totalTime: 0,
        lastLapTime: 0,
        pitStops: 0,
        status: "Waiting"
    }
];

function displayStandings(){
    
    let standingsBody = document.getElementById("standings-body");

    standingsBody.innerHTML = "";

    for(let i = 0; i < drivers.length; i++){
        let driver = drivers[i];
        let row = `
            <tr>
                <td>${i + 1}</td>
                <td>
                    <div class="driver-info">
                        <p class="driver-name">${driver.name}</p>
                        <p class="driver-team">${driver.team}</p>
                    </div>
                </td>
                <td>${driver.tires}</td>
                <td>${driver.totalTime}</td>
            </tr>
        `;
        standingsBody.innerHTML += row;
    }
}
displayStandings();

let currentLap = 0;
let raceStarted = false;
let raceFinished = false;
let safetyCar = false;

function updateSafetyCarStatus(){
    
    let safetyCarStatus = document.getElementById("safety-car-status");

    if(!safetyCar){
        safetyCarStatus.textContent = "OFF";
        safetyCarStatus.style.color = "#DC3545";
    }
    else {
        safetyCarStatus.textContent = "ON";
        safetyCarStatus.style.color = "#28A745";
    }
}
updateSafetyCarStatus();

function resetRace(){

    currentLap = 0;
    raceStarted = false;
    raceFinished = false;
    safetyCar = false;

    for(let i = 0; i < drivers.length; i++){
        let driver = drivers[i];

        driver.totalTime = 0;
        driver.lastLapTime = 0;
        driver.pitStops = 0;
        driver.status = "Waiting";
        driver.tires = driver.initialTires;
    }
    displayStandings();
    

}

function updateLaps(){

    let currentLapStatus = document.getElementById("current-lap");

}
