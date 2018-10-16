class TLocalStorage  {
    constructor() {
    }

    addValue(key, value) {
        localStorage[key] = value;
    }

    getValue(key) {
        let getValue = localStorage[key];
        if (localStorage[key]) {
            let trueKey = key.substring(0, key.length - 1);
            alert(` название: ${trueKey}, \n${getValue}.`);
        } else {
            alert('нет такого блюда');
        }
    }

    deleteValue(key) {
        if (localStorage.getItem(key)){
            localStorage.removeItem(key);
            alert("удаление прошло успешно");
        } else {
            alert("не удалось удалить, попробуйте снова");
        }
    }

    getKeys() {
        let keys = Object.keys(localStorage);
        alert(keys);
    }
}

// -- Для напитков

let drinkLocalStorage = new TLocalStorage();

function enterDrink(key, value, receipt) {
    key += '_';
    drinkLocalStorage.addValue(`${key}`, ` алкогольный: ${value}, \n рецепт приготовления: ${receipt}`);
}

function getDrink(key) {
    key += '_';
    drinkLocalStorage.getValue(key);
}

function deleteDrink(key) {
    key += '_';
    drinkLocalStorage.deleteValue(key);
}

function getAllDrink() {
    let massiv = [/,/i];
    let keys = Object.keys(localStorage);
    let result = keys.filter(function (text) {
        return !massiv.some(function (regex) {
            return regex.test(text);
        });
    });
    let keyDrink = result.join('').split('_');
    alert(keyDrink);
}


//-- для блюд
let dishLocalStorage = new TLocalStorage();

function enterDish(key, value, receipt) {
    key += ',';
    dishLocalStorage.addValue(`${key}`, ` вид блюда: ${value}, \n рецепт приготовления: ${receipt}`);
}

function getDish(key) {
    key += ',';
    dishLocalStorage.getValue(key);
}

function deleteDish(key) {
    key += ',';
    dishLocalStorage.deleteValue(key);
}

function getAllDish() {
    let massiv = [/_/i];
    let keys = Object.keys(localStorage);
    let result = keys.filter(function (text) {
        return !massiv.some(function (regex) {
            return regex.test(text);
        });
    });
    let keyDish = result.join('');
    alert(keyDish);
}

