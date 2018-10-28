class TLocalStorage  {
    constructor() {
    }

    addValue(key, value) {
        localStorage[key] = value;
    }

    getValue(key) {
        let getValue = localStorage[key];
        if (localStorage[key]) {
            let trueKey = key;
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
let drinkTAJAXStorage = new TAJAXStorage();

function enterDrink(name, alc, recipe) {
    drinkLocalStorage.addValue(`${name}`, ` алкогольный: ${alc}, \n рецепт приготовления: ${recipe}`);
    drinkTAJAXStorage.sendMessage(name, alc, recipe);
}

function getDrink(name) {
    drinkLocalStorage.getValue(name);
    drinkTAJAXStorage.getTAJAXStorage(name);
}

function deleteDrink(name) {
    drinkLocalStorage.deleteValue(name);
    drinkTAJAXStorage.deleteLockget(name);
}

function getAllDrink() {
    drinkLocalStorage.getKeys();
    drinkTAJAXStorage.getAllTAJAXStorage();
}



