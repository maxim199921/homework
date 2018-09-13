class Boy { // Базовый класс
    constructor(man) { // Конструктор
        this.man = man; // Создание и инициализация поля
    }
    getMarry (other){
        console.log(other instanceof Girl);
    }
}

class Girl { // Базовый класс
    constructor(woman) { // Конструктор
        this.man = woman; // Создание и инициализация поля
    }
    getMarry (other){
        console.log(other instanceof Boy);
    }
}

const ivan = new Boy("ivan");
const maks = new Boy("maks");

const lera = new Girl(("lera"));
const dasha = new Girl("dasha");

ivan.getMarry(maks);
maks.getMarry(lera);
maks.getMarry(dasha);
dasha.getMarry(ivan);
dasha.getMarry(lera);

