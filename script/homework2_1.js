'use strict';


let surname = prompt("Ваша фамилия?", "");

if (surname == "") {
    for (;surname == "";) {surname = prompt("введите корректно Вашу фамилию!", "")};
};


let name = prompt("Ваше имя?", "");

if (name == "") {
    for (;name == "";) {name = prompt("введите корректно Ваше имя!", "")};
};


let patronymic = prompt("Ваше отчество?", "");

if (patronymic == "") {
    for (;patronymic == "";) {patronymic = prompt("введите корректно Ваше отчество!", "")};
};


let age = prompt("Ваш возраст?", 0);

if (age == 0 || age != +age) {
    for (;age == 0 || age != +age;) {age = prompt("введите корректно Ваш возраст!", "")};
};

const ageDays = age*365;

const ageAfter = (Number(age) + 20);

let floorget = confirm("Ваш пол мужской?");

switch ( floorget ) {
    case true:
        floorget = "мужской";
        break;
    case false:
        floorget = "женский";
        break;
}


let pension = confirm("Вы на пенсии?");

switch ( pension ) {
    case true:
        pension = "да";
        break;
    case false:
        pension = "нет";
        break;
}

const form = `Ваше ФИО: ${surname} ${name} ${patronymic}
Ваш возраст: ${age} лет
Ваш возраст в днях: ${ageDays} дней
Через 20 лет вам будет: ${ageAfter}
Ваш пол: ${floorget}
Вы на пенсии: ${pension}`;

alert(form);

/*alert('Ваше ФИО:'+ " " + surname + " " + name + " " + patronymic + "\n"
    + "Ваш возраст:" + " " + age + " " + "лет" + "\n"
    + "Ваш возраст в днях:" + " " + ageDays + " " + "дней" + "\n"
    + "Через 20 лет вам будет:" + " " + ageAfter + " " + "года" + "\n"
    + "Ваш пол:" + " " + floorget + "\n"
    + "Вы на пенсии:" + " " + pension);









/*'use strict';

var x = 'ваше имя - максим';
var y = 'ваша фамилия - чупилин';
var z = 'ваше отчество - сергеевич';
var f = `${x}
${y}
${z}`;


console.log(f);

*/

/*
function test() {

    var x = Math.round((0.1 + 0.5) * 10) / 10;
    const exp = 125e5;

    console.log (x);
    console.log (Math.pow(2, 4));
    console.log (exp);
}

test();
*/
