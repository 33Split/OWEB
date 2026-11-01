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
        pitLap: 5,
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
        pitLap: 6,
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
        pitLap: 7,
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
        pitLap: 4,
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
        pitLap: 5,
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
        pitLap: 8,
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
        pitLap: 6,
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
        pitLap: 7,
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
        pitLap: 6,
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
        pitLap: 4,
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
                <td>${driver.totalTime.toFixed(3)}</td>
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
updateLaps();

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
    updateLaps();
    clearEvents();
    updateSafetyCarStatus();
}
document.getElementById("reset-race").addEventListener("click", resetRace);

function updateLaps(){
    
    let currentLapStatus = document.getElementById("current-lap");
    currentLapStatus.textContent = currentLap + "/10";
}

function clearEvents(){
    
    let events = document.getElementById("events-list");
    events.innerHTML = "";
}

function addEvent(message){
    
    let events = document.getElementById("events-list");
    let event = document.createElement("li");

    event.textContent = message;
    events.prepend(event);
}

function startRace(){
        
    if(raceStarted || raceFinished){
        return;
    }
    raceStarted = true;
    
    for(let i = 0; i < drivers.length; i++){
        drivers[i].status = "Racing";
    }
    displayStandings();
    addEvent("Race Started!");
}
document.getElementById("start-race").addEventListener("click", startRace);

function compareDrivers(a, b){
    
    return a.totalTime - b.totalTime;
}

function changeTires(driver){

    if(driver.tires === "Soft"){
        driver.tires = "Hard";
    }
    else if(driver.tires === "Hard"){
        driver.tires = "Soft";
    }
}

function nextLap(){

    if(!raceStarted || raceFinished){
        return;
    }
    currentLap++;
    updateLaps();
    
    for(let i = 0; i < drivers.length; i++){
        let driver = drivers[i];
        let lapTime = calculateLapTime(driver);
        
        driver.status = "Racing";
        driver.lastLapTime = lapTime;
        driver.totalTime += lapTime;

        if(currentLap === driver.pitLap && driver.pitStops === 0){
            driver.status = "Pit Stop";
            changeTires(driver);
            driver.pitStops++;
            driver.totalTime += 20;
            addEvent(driver.name + " is making a pit stop!");

            driver.status = "Racing";
        }
        checkForIncident(driver);
    }

    drivers.sort(compareDrivers);

    if(currentLap === 10){
        raceFinished = true;

        for(let i = 0; i < drivers.length; i++){
            drivers[i].status = "Finished";
        }
        addEvent("Race Finished!");
        addEvent("Winner: " + drivers[0].name);
    }
    displayStandings();
}
document.getElementById("next-lap").addEventListener("click", nextLap);

function calculateLapTime(driver){
    
    let randomOffset = Math.random() * 3 - 1.5;
    let time = 90 - (driver.speed * 0.15) - (driver.skill * 0.05) + randomOffset;

    if(driver.tires === "Soft"){
        time *= 0.98;
    }
    else if(driver.tires === "Hard"){
        time *= 1.02;
    }

    if(safetyCar){
        time += 15;
    }
    return time;
}

function checkForIncident(driver){
    
    let chance = Math.random();

    if(chance < 0.05){
        driver.status = "Spinning";
        driver.totalTime += 5;
        addEvent(driver.name + " is spinning!");
    }
}
