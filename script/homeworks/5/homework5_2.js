function Person(name) {
    this.name = name;
    this.age = 0;
    this.friends = [];
}

Person.prototype.grow = function (age) {
    this.age = age;
};

Person.prototype.setFriend = function (other) {
    if (this.friends.indexOf(other) === -1) {
        this.friends.push(other);
        other.setFriend(this);
    }
};

Person.prototype.hasFriend = function (other) {
    return this.friends.includes(other);
};

Person.prototypesayHello = function () {
    console.log(
        `hi, my name's ${this.name}, ${this.age} years, ${this.friends}`);
};


function Boy(name) {
    this.superConstructor.call(this, name);
    this.man = name;
}

var f = function () {
};
f.prototype = Person.prototype;
Boy.prototype = new f();
Boy.prototype.constructor = Boy;
Boy.prototype.super = f.prototype;
Boy.prototype.superConstructor = Person;


Boy.prototype.getMarry = function (other) {
    if (other instanceof Girl !== false) {
        return true;
    }

    if (other instanceof Girl !== true) {
        return false;
    }
};


function Girl(name) {
    this.superConstructor.call(this, name);
    this.woman = name;
}

var f = function () {
};
f.prototype = Person.prototype;
Girl.prototype = new f();
Girl.prototype.constructor = Girl;
Girl.prototype.super = f.prototype;
Girl.prototype.superConstructor = Person;


Girl.prototype.getMarry = function (other) {
    if (other instanceof Boy !== false) {
        return true;
    }

    if (other instanceof Boy !== true) {
        return false;
    }
};

const ivan = new Boy("ivan");
const maks = new Boy("maks");

const lera = new Girl(("lera"));
const dasha = new Girl("dasha");

console.log(ivan.getMarry(maks));//false
console.log(ivan.getMarry(lera));//true
console.log(ivan.getMarry(dasha));//true
console.log(dasha.getMarry(maks));//true
console.log(dasha.getMarry(lera));//false