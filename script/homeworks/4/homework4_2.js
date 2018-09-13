class Boy { // Базовый класс
    constructor(man) { // Конструктор
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

class Girl { // Базовый класс
    constructor(woman) { // Конструктор
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
