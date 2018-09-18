'use strict';

class HashStorage {
    constructor() {
        this._hash = [];
    }

    addValue(key, value, receipt) {
        // key = prompt("название", "");
        // value = prompt("алкогольный?", "");
        // receipt = prompt("Рецепт", "");

        this._hash.push({key: key, value: {isAlcoholik: value, recept: receipt}});
    }

    getValue(key) {
        // key = prompt("Введите название напитка", "");

        let resultObj = this._hash.reduce(function (acc, element) {
           if (element.key === key) {
               acc = element;
           }
           return acc;
        }, null);
        if (resultObj) {
            alert(` напиток: ${resultObj.key} \n алкогольный: ${resultObj.value.isAlcoholik} \n рецепт приготовления: ${resultObj.value.recept}`);
        } else {
            alert('нет такого напитка');
        }
        // let resultArray = this._hash.filter(function (element) {
        //     return element.key === key;
        // });
        // console.log(resultObj);
        // for (let element of this._hash) {
        //     if (element.key === key) {
        //         // v = JSON.stringify(element.value) - переводит обьект в строку
        //         alert(` напиток: ${key} \n алкогольный: ${element.value.isAlcoholik} \n рецепт приготовления: ${element.value.recept}`);
        //         break;
        //     }
        // }
        // this._hash.forEach(function (element) {
        //     if (element.key === key) {
        //         console.log(element.key);
        //         // v = JSON.stringify(element.value) - переводит обьект в строку
        //         alert(` напиток: ${key} \n алкогольный: ${element.value.isAlcoholik} \n рецепт приготовления: ${element.value.recept}`);
        //         return false;
        //     } else {
        //         console.log(element.key);
        //         alert(`такого напитка нет`);
        //     }
        // });
    }

    deleteValue(key) {
        // key = prompt("Введите название напитка который вы хотите удалить", "");

        for (let i = 0; i < this._hash.length; i++) {
            if (this._hash[i].key === key) {
                this._hash.splice(i, 1);
                alert('напиток удалён успешно')
                break;
            }
        }
    }

    getKeys() {
        let keys = [] /*Object.keys(this._hash) - ТАК КОРОЧЕ!!!*/;

        for (let element of this._hash) {
            keys.push(element.key);
        }

        alert(keys);
    }
}

let drinkStorage = new HashStorage();

// class DrinkSubscription {
//     constructor(alcholik, recipe) {
//         this._alchoholik = alcholik;
//         this._recipe = recipe;
//     }
// }

// let inp = document.querySelector('input');
// inp.addEventListener('click', function (e) {
//     e.preventDefault();
//     drinkStorage.addValue();
// });

// // let margarittaSubscription = new DrinkSubscription(true, `vodka, siski, koks: mix`);
// drinkStorage.addValue(`margaritta`, `alchoholik: true, recipe: vodka, siski, koks: mix`);
// drinkStorage.addValue(`coka-cola`, `no`);
// console.log(drinkStorage.getValue(`margaritta`));
// console.log(drinkStorage.getKeys());
// drinkStorage.deleteValue(`coka-cola`);
// console.log(drinkStorage.getValue(`coka-cola`));
// console.log(drinkStorage.getValue(`margaritta`));
// console.log(drinkStorage.getKeys());
// console.log(drinkStorage._hash);


