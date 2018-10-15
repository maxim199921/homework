"use strict";
let body = document.body;
let script = document.querySelector('.scr');

let clockSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
clockSvg.setAttribute('class', 'clock');
clockSvg.setAttribute('width', '200');
clockSvg.setAttribute('height', '200');
body.appendChild(clockSvg);
body.insertBefore(clockSvg, script);

let backgroundCircle = document.createElementNS('http://www.w3.org/2000/svg',"circle");
backgroundCircle.setAttribute('r', '100');
backgroundCircle.setAttribute('cx', '100');
backgroundCircle.setAttribute('cy', '100');
backgroundCircle.setAttribute('fill', 'orange');
clockSvg.appendChild(backgroundCircle);

let backgroundNubmer = document.createElementNS('http://www.w3.org/2000/svg',"circle");
backgroundNubmer.setAttribute('class', 'circleclock');
backgroundNubmer.setAttribute('r', '12.5');
backgroundNubmer.setAttribute('cx', '100');
backgroundNubmer.setAttribute('cy', '20');
backgroundNubmer.setAttribute('fill', 'green');
clockSvg.appendChild(backgroundNubmer);

let textNubmer = document.createElementNS('http://www.w3.org/2000/svg',"text");
textNubmer.setAttribute('class', 'textclock');
textNubmer.setAttribute('x', '90');
textNubmer.setAttribute('y', '25');
textNubmer.style.fontSize = '20px';
clockSvg.appendChild(textNubmer);

let text = document.createTextNode('12');
textNubmer.appendChild(text);

let textClockTime = document.createElementNS('http://www.w3.org/2000/svg',"text");
textClockTime.setAttribute('class', 'time');
textClockTime.setAttribute('x', '65');
textClockTime.setAttribute('y', '70');
textClockTime.style.fontSize = '20px';
clockSvg.appendChild(textClockTime);

let textTime = document.createTextNode('00:00:00');
textClockTime.appendChild(textTime);

let secondLine = document.createElementNS('http://www.w3.org/2000/svg',"line");
secondLine.setAttribute('class', 'clock-second');
secondLine.setAttribute('x1', '100');
secondLine.setAttribute('y1', '100');
secondLine.setAttribute('x2', '100');
secondLine.setAttribute('y2', '13');
secondLine.setAttribute('stroke', 'black');
secondLine.setAttribute('stroke-width', '2');
secondLine.setAttribute('fill', 'black');
clockSvg.appendChild(secondLine);

let minutesLine = document.createElementNS('http://www.w3.org/2000/svg',"line");
minutesLine.setAttribute('class', 'clock-minutes');
minutesLine.setAttribute('x1', '100');
minutesLine.setAttribute('y1', '100');
minutesLine.setAttribute('x2', '100');
minutesLine.setAttribute('y2', '23');
minutesLine.setAttribute('stroke', 'black');
minutesLine.setAttribute('stroke-width', '5');
minutesLine.setAttribute('fill', 'black');
clockSvg.appendChild(minutesLine);

let hourLine = document.createElementNS('http://www.w3.org/2000/svg',"line");
hourLine.setAttribute('class', 'clock-hour');
hourLine.setAttribute('x1', '100');
hourLine.setAttribute('y1', '100');
hourLine.setAttribute('x2', '100');
hourLine.setAttribute('y2', '50');
hourLine.setAttribute('stroke', 'black');
hourLine.setAttribute('stroke-width', '7');
hourLine.setAttribute('fill', 'black');
clockSvg.appendChild(hourLine);



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
    secElement.style.transformOrigin = '100px 100px 0';
    secElement.style.transform = `rotate(${turnSec}deg)`;
    secElement.style.opacity = `0.8`;
    let eachSec = setInterval(function () {
        turnSec = turnSec + 6;
        secElement.style.transform = `rotate(${turnSec}deg)`;
    }, 1000);
}

function moveMin() {
    let turnMin = min * 6;
    minElement.style.transformOrigin = '100px 100px 0';
    minElement.style.transform = `rotate(${turnMin}deg)`;
    minElement.style.opacity = `0.8`;
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
    hourElement.style.transformOrigin = '100px 100px 0';
    hourElement.style.transform = `rotate(${turnHour}deg)`;
    hourElement.style.opacity = "0.8";
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



let getCircle = document.getElementsByTagName('circle');
let getText = document.getElementsByTagName('text');

for (let i = 12; i > 0; i--)  {
    let cloneCircle = getCircle[1].cloneNode(true),
        cloneText = getText[0].cloneNode(true);
    cloneCircle.setAttribute('cx',(100 - 80 * Math.sin(i * Math.PI / 6) +  'px'));
    cloneCircle.setAttribute('cy',(100 - 80 * Math.cos(i * Math.PI / 6) + 'px'));
    document.getElementsByTagName('svg')[0].
    insertBefore(cloneCircle, secElement);
    cloneText.setAttribute('x',(95 + 85 * Math.sin(i * Math.PI / 6) +  'px'));
    cloneText.setAttribute('y',(105 - 80 * Math.cos(i * Math.PI / 6) + 'px'));
    cloneText.textContent = i;
    document.getElementsByTagName('svg')[0].
    appendChild(cloneText);
}

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
    let strVal = val.toString();
    while (strVal.length < len)
        strVal = '0' + strVal;
    return strVal;
}


setInterval(updateTime, 1000);




