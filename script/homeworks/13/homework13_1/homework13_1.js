"use strict";
 // -динамическое добавление элементов на страницу

let body = document.body;

let divWrapper = document.createElement("div");
divWrapper.className = 'clock';
divWrapper.style.backgroundColor = 'orange';
divWrapper.style.position = 'relative';
divWrapper.style.width = '200px';
divWrapper.style.height = '200px';
divWrapper.style.borderRadius = '50%';
body.appendChild(divWrapper);

for (let i = 1, deg = 30; i <= 12; i++, deg+=30) {
    const num = document.createElement('div');
    const span = document.createElement('span');
    const numInner = document.createElement('div');
    num.className = "num";
    num.style.position = 'absolute';
    num.style.top = (200 - 25)/2+'px';
    num.style.left = (200 - 25)/2+'px';
    num.style.transformOrigin = '50% 50%';
    num.style.borderRadius = '50%';
    num.style.width = '25px';
    num.style.height = '25px';
    num.style.backgroundColor = 'green';
    num.style.transform = 'rotate('+deg+'deg) translateY(-80px)';
    divWrapper.appendChild(num);
    num.appendChild(numInner);
    span.innerText = i;
    span.style.transform = 'rotate('+-deg+'deg)';
    span.style.display = 'inline-block';
    numInner.style.height = '100%';
    numInner.style.display = 'flex';
    numInner.style.flexDirection = 'column';
    numInner.style.justifyContent = 'center';
    numInner.style.textAlign = 'center';
    numInner.appendChild(span);
}

let divTime = document.createElement("div");
divTime.className = 'time';
divTime.style.position = 'absolute';
divTime.style.top = '55px';
divTime.style.left = '65px';
divTime.style.fontSize = '20px';
divWrapper.appendChild(divTime);

let divHour = document.createElement("div");
divHour.className = 'clock-hour';
divHour.style.position = 'absolute';
divHour.style.top = (200/2)-50+'px';
divHour.style.left = (200 - 6)/2+'px';
divHour.style.transformOrigin = 'bottom right';
divHour.style.width = '7px';
divHour.style.height = '50px';
divHour.style.backgroundColor = 'black';
divHour.style.borderRadius = '2.5px';
divHour.style.opacity = '0.8';
divWrapper.appendChild(divHour);

let divMinutes = document.createElement("div");
divMinutes.className = 'clock-minutes';
divMinutes.style.position = 'absolute';
divMinutes.style.top = (200/2)-77+'px';
divMinutes.style.left = (200 - 4)/2+'px';
divMinutes.style.transformOrigin = 'bottom right';
divMinutes.style.width = '5px';
divMinutes.style.height = '77px';
divMinutes.style.backgroundColor = 'black';
divMinutes.style.borderRadius = '2.5px';
divMinutes.style.opacity = '0.8';
divWrapper.appendChild(divMinutes);

let divSecond = document.createElement("div");
divSecond.className = 'clock-second';
divSecond.style.position = 'absolute';
divSecond.style.top = (200/2)-87+'px';
divSecond.style.left = (200 - 2)/2+'px';
divSecond.style.transformOrigin = 'bottom right';
divSecond.style.width = '2px';
divSecond.style.height = '87px';
divSecond.style.backgroundColor = 'black';
divSecond.style.borderRadius = '2.5px';
divSecond.style.opacity = '0.8';
divWrapper.appendChild(divSecond);




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




