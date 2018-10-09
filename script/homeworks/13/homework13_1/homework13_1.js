"use strict";
// - динамическое добавление элементов на страницу
let body = document.body;

let divWrapper = document.createElement("div");
divWrapper.className = 'clock';
divWrapper.style.background = 'orange';
divWrapper.style.height = '200px';
divWrapper.style.width = '200px';
divWrapper.style.position = 'relative';
divWrapper.style.borderRadius = '50%';
body.appendChild(divWrapper);

let divTime = document.createElement("div");
divTime.className = 'time';
divTime.style.position = 'absolute';
divTime.style.top = '40px';
divTime.style.left = '45px';
divTime.style.fontSize = '30px';
divWrapper.appendChild(divTime);

let divHour = document.createElement("div");
divHour.className = 'clock-hour';
divHour.style.width = '5px';
divHour.style.height = '50px';
divHour.style.background = 'black';
divHour.style.borderRadius = '2px';
divHour.style.position = 'absolute';
divHour.style.top = '50px';
divHour.style.left = '99px';
divHour.style.zIndex = '3';
divHour.style.transformOrigin = '0 100%';
divWrapper.appendChild(divHour);

let divMinutes = document.createElement("div");
divMinutes.className = 'clock-minutes';
divMinutes.style.width = '5px';
divMinutes.style.height = '70px';
divMinutes.style.background = 'cornflowerblue';
divMinutes.style.borderRadius = '2px';
divMinutes.style.position = 'absolute';
divMinutes.style.top = '30px';
divMinutes.style.left = '99px';
divMinutes.style.zIndex = '2';
divMinutes.style.transformOrigin = '0 100%';
divWrapper.appendChild(divMinutes);

let divSecond = document.createElement("div");
divSecond.className = 'clock-second';
divSecond.style.width = '2.5px';
divSecond.style.height = '80px';
divSecond.style.background = 'red';
divSecond.style.borderRadius = '2px';
divSecond.style.position = 'absolute';
divSecond.style.top = '20px';
divSecond.style.left = '99px';
divSecond.style.zIndex = '1';
divSecond.style.transformOrigin = '0 100%';
divWrapper.appendChild(divSecond);

let ulNumers = document.createElement("ul");
ulNumers.className = 'clock-numbers';
ulNumers.style.listStyle = 'none';
ulNumers.style.transform = 'rotate(23deg)';
ulNumers.style.top = '-40px';
ulNumers.style.left = '47px';
ulNumers.style.position = 'absolute';
divWrapper.appendChild(ulNumers);

for (let i = 1, n = 0; i < 13; i++) {
    let liNumbers = document.createElement("li");
    liNumbers.style.margin = '-10px';
    liNumbers.style.position = 'absolute';
    liNumbers.style.textAlign = 'center';
    liNumbers.style.borderRadius = '50%';
    liNumbers.style.background = 'greenyellow';
    liNumbers.style.width = '20px';
    liNumbers.style.height = '20px';
    liNumbers.style.left = '108px';
    liNumbers.style.top = '20px';
    liNumbers.style.transformOrigin = '0 90px';
    liNumbers.style.transform = `rotate(${n}deg)`;
    n = n + 30;
    liNumbers.innerHTML = `${i}`;
    ulNumers.appendChild(liNumbers);
}


//- события на стрелках часов

let date = new Date();
/*Информация о дате*/
let hour = date.getHours();
/*получение текущего часа*/
let min = date.getMinutes();
/*получение текущих минут*/
let sec = date.getSeconds();
/*получение текущих секунд*/
let hourElement = document.querySelector(".clock-hour");
/*получение элемента стрелки показания часа в DOM*/
let minElement = document.querySelector(".clock-minutes");
/*получение элемента стрелки показания минут в DOM*/
let secElement = document.querySelector(".clock-second");

/*получение элемента стрелки показания секунд в DOM*/


function moveSec() {
    let turnSec = sec * 6;
    secElement.style.transform = `rotate(${turnSec}deg)`;
    let eachSec = setInterval(function () {
        turnSec = turnSec + 6;
        secElement.style.transform = `rotate(${turnSec}deg)`;
    }, 1000);
}

function moveMin() {
    let turnMin = min * 6;
    minElement.style.transform = `rotate(${turnMin}deg)`;
    setTimeout(function () {
        turnMin = turnMin + 6;
        minElement.style.transform = `rotate(${turnMin}deg)`;
        let eachMin = setInterval(function () {
            turnMin = turnMin + 6;
            minElement.style.transform = `rotate(${turnMin}deg)`;
        }, 60000);
    }, (60 - sec) * 1000);
}

function moveHour() {
    let turnHour = hour * 30 + getHalfGradusForHour();
    hourElement.style.transform = `rotate(${turnHour}deg)`;
    setTimeout(function () {
        turnHour = turnHour + 6;
        hourElement.style.transform = `rotate(${turnHour}deg)`;
        let eachHour = setInterval(function () {
            turnHour = turnHour + 6;
            hourElement.style.transform = `rotate(${turnHour}deg)`;
        }, 720000);
    }, (getFirstStartHour() - min) * 1000 * 60 - ((getFirstStartHour() - (getFirstStartHour() - sec)) * 1000));
}

function getFirstStartHour() {
    let minuts = 0;
    if (min >= 1 && min < 12) {
        minuts = 12;
        return minuts;
    }
    if (min >= 12 && min < 24) {
        minuts = 24;
        return minuts;
    }
    if (min >= 24 && min < 36) {
        minuts = 36;
        return minuts;
    }
    if (min >= 36 && min < 48) {
        minuts = 48;
        return minuts;
    }
    if (min >= 48 && min < 60) {
        minuts = 60;
        return minuts;
    }
}

function getHalfGradusForHour() {
    let date = new Date();
    let gradus = 0;
    let min = date.getMinutes();
    if (min >= 1 && min < 12) {
        gradus = 0;
        return gradus;
    }
    if (min >= 12 && min < 24) {
        gradus = 6;
        return gradus;
    }
    if (min >= 24 && min < 36) {
        gradus = 12;
        return gradus;
    }
    if (min >= 36 && min < 48) {
        gradus = 18;
        return gradus;
    }
    if (min >= 48 && min < 60) {
        gradus = 24;
        return gradus;
    }
    if (min = 60) {
        gradus = 30;
        return gradus;
    }
}

console.log(getHalfGradusForHour());


moveSec();
moveMin();
moveHour();

// Функция для показания времени


function updateTime() {
    let dates = new Date();
    let hours = dates.getHours();
    let minutes = dates.getMinutes();
    let seconds = dates.getSeconds();
    document.querySelector('.time').innerHTML = `${timeWithNull(hours, 2)}:${timeWithNull(minutes, 2)}:${timeWithNull(seconds, 2)}`;
}

function timeWithNull(val, len) {
    var strVal = val.toString();
    while (strVal.length < len)
        strVal = '0' + strVal;
    return strVal;
}


setInterval(updateTime, 1000);




