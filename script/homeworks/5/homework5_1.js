'use strict';

class HashStorage {
    constructor() {
        this._hash = [];
    }

    addValue(key, value) {
        this._hash.push({key: key, value: value});
    }

    getValue(key) {
        for (let element of this._hash) {
            if (element.key === key) {
                return element.value;
            }
        }
    }

    deleteValue(key) {
        for (let i = 0; i < this._hash.length; i++) {
            if (this._hash[i].key === key) {
                this._hash.splice(i, 1);
                break;
            }
        }
    }

    getKeys() {
        let keys = [];

        for (let element of this._hash) {
            keys.push(element.key);
        }

        return keys;
    }
}

// class DrinkSubscription {
//     constructor(alcholik, recipe) {
//         this._alchoholik = alcholik;
//         this._recipe = recipe;
//     }
// }



let drinkStorage = new HashStorage();
// let margarittaSubscription = new DrinkSubscription(true, `vodka, siski, koks: mix`);
drinkStorage.addValue(`margaritta`,{alchoholik: true, recipe: `vodka, siski, koks: mix`});
drinkStorage.addValue(`coka-cola`, `no`);
console.log(drinkStorage.getValue(`margaritta`));
console.log(drinkStorage.getKeys());
drinkStorage.deleteValue(`coka-cola`);
console.log(drinkStorage.getValue(`coka-cola`));
console.log(drinkStorage.getValue(`margaritta`));
console.log(drinkStorage.getKeys());



