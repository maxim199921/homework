class MaksNubas {
    constructor() {
    };

    sayHello() {
        console.log(`hi im good boy`);
    }
}

let maksGood = new MaksNubas();

class MaksLearnsJS extends MaksNubas {
    constructor(arr){
        super();
        this._arr = arr;
    }

    getSwap() {
        let element;
        let arr = this._arr;
        let halfLength = Math.round(arr.length / 2);

        if (arr.length % 2 === 0) {
            for (i = 0; i < halfLength; i++) {
                element = arr[i + halfLength];
                arr[i + halfLength] = arr[i];
                arr[i] = element;
            }
        } else {
            for (i = 0; i < halfLength - 1; i++) {
                element = arr[i + halfLength];
                arr[i + halfLength] = arr[i];
                arr[i] = element;
            }
        }

        return arr;
    };

}

maksGood.sayHello();

let array = [];
let t = Math.round(Math.random() * 20);


for (i = 0, t ; i < t; i++) {
    array.push(Math.round(Math.random() * 10));
}

const maksimka = new MaksLearnsJS(array);

maksimka.sayHello();
console.log(array);
// maksimka.getSwap().forEach(element => console.log(element));
console.log(maksimka.getSwap());

