class TLocalStorage  {
    constructor() {
    }

    addValuedrink(key, value, receipt) {
        localStorage.setItem(`${key}_`, ` алкогольный: ${value}, \n рецепт приготовления: ${receipt}`);
    }

    addValuedish(key, value, receipt) {
        localStorage.setItem(`${key},`, ` вид блюда: ${value}, \n рецепт приготовления: ${receipt}`);
    }

    getValuedrink(key) {
        let trueKey = key + "_";
        let getValue = localStorage[trueKey];
        if (localStorage[trueKey]) {
            alert(` название: ${key}, \n${getValue}.`);
        } else {
            alert(`такого напитка нет`)
        }
    }

    getValuedish(key) {
        let trueKey = key + ",";
        let getValue = localStorage[trueKey];
        if (localStorage[trueKey]) {
            alert(` название: ${key}, \n${getValue}.`);
        } else {
            alert('нет такого блюда');
        }
    }

    deleteValuedrink(key) {
        let trueKey = key + "_";
        if (localStorage.getItem(trueKey)){
            localStorage.removeItem(trueKey);
            alert("удаление прошло успешно");
        } else {
            alert("не удалось удалить, попробуйте снова");
        }
    }

    deleteValuedish(key) {
        let trueKey = key + ",";
        if (localStorage.getItem(trueKey)){
            localStorage.removeItem(trueKey);
            alert("удаление прошло успешно");
        } else {
            alert("не удалось удалить, попробуйте снова");
        }
    }

    getKeysdrink() {
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

    getKeysdish() {
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
}

let drinkStorage = new TLocalStorage();
let dishStorage = new TLocalStorage();