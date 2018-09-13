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
    constructor(man) { // Конструктор
        super();
        this.man = man; // Создание и инициализация поля
    }

    getMarry(other) {
        if (other instanceof Girl !== false) {
            return true;
        }

        if (other instanceof Girl !== true) {
            return false;
        }
    }
}

class Girl extends Person { // Базовый класс
    constructor(woman) { // Конструктор
        super();
        this.man = woman; // Создание и инициализация поля
    }

    getMarry(other) {
        if (other instanceof Boy !== false) {
            return true;
        }

        if (other instanceof Boy !== true) {
            return false;
        }
    }
}

const ivan = new Boy("ivan");
const maks = new Boy("maks");

const lera = new Girl(("lera"));
const dasha = new Girl("dasha");

console.log(ivan.getMarry(maks));
console.log(ivan.getMarry(lera));
console.log(ivan.getMarry(dasha));
console.log(dasha.getMarry(maks));
console.log(dasha.getMarry(lera));
