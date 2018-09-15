class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.friends = [];
    }
    grow(age) {
        this.age = age;
    }
    setFriend(other) {
        if (this.friends.indexOf(other) === -1) {
            this.friends.push(other);
            other.setFriend(this);
        }
    }
    hasFriend(other) {
        return this.friends.includes(other);
    }

    sayHello() {
        console.log(
            `hi, my name's ${this.name}, ${this.age} years, ${this.friends}`);
    }
}

class Boy extends Person { // Базовый класс
    constructor(name) { // Конструктор
        super(name);
        this.man = name; // Создание и инициализация поля
    }
    getMarry (other){
        console.log(other instanceof Girl);
    }
}

class Girl extends Person { // Базовый класс
    constructor(name) { // Конструктор
        super(name)
        this.woman = name; // Создание и инициализация поля
    }
    getMarry (other){
        console.log(other instanceof Boy);
    }
}

const ivan = new Boy("ivan");
const maks = new Boy("maks");

const lera = new Girl(("lera"));
const dasha = new Girl("dasha");

ivan.getMarry(maks);//false
maks.getMarry(lera);//true
maks.getMarry(dasha);//true
dasha.getMarry(ivan);//true
dasha.getMarry(lera);//false


