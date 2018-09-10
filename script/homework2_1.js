'use strict';

let surname;
do {
    surname = prompt("Ваша фамилия?", "")
} while (surname === "" || surname === null);


let name1;
do {
    name1 = prompt("Ваше имя?", "")
} while (name1 === "" || name1 === null);


let patronymic;
do {
    patronymic = prompt("Ваше отчество?", "")
} while (patronymic === "" || patronymic === null);


let age;
do {
    age = prompt("Ваш возраст?", 0);
} while (age != +age || age == 0 || age === null);


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

const pension = (age > 60) ? "да" : "нет";

const form = `Ваше ФИО: ${surname} ${name1} ${patronymic}
Ваш возраст: ${age} лет
Ваш возраст в днях: ${ageDays} дней
Через 20 лет вам будет: ${ageAfter}
Ваш пол: ${floorget}
Вы на пенсии: ${pension}`;

console.log(form);

/*
'use strict';

var surname;
do {
  surname = prompt("Ваша фамилия?", "")
} while (surname === "" || surname === null);


var name1;
do {
  name1 = prompt("Ваше имя?", "")
} while (name1 === "" || name1 === null);


var patronymic;

do {
  patronymic = prompt("Ваше отчество?", "")
} while (patronymic === "" || patronymic === null);


var age;

do {
  age = prompt("Ваш возраст?", 0);
} while (age != +age || age == 0 || age === null);


var ageDays = age*365;

var ageAfter = (Number(age) + 20);

var floorget = confirm("Ваш пол мужской?");

switch ( floorget ) {
    case true:
        floorget = "мужской";
        break;
    case false:
        floorget = "женский";
        break;
}

var pension = (age > 60) ? "да" : "нет";

console.log("Ваше ФИО:" + " " + surname + " " + name1 + " " + patronymic + "\n"
    + "Ваш возраст:" + " " + age + " " + "лет" + "\n"
    + "Ваш возраст в днях:" + " " + ageDays + " " + "дней" + "\n"
    + "Через 20 лет вам будет:" + " " + ageAfter + " " + "\n"
    + "Ваш пол:" + " " + floorget + "\n"
    + "Вы на пенсии:" + " " + pension);


 */
