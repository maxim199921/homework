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
const ivan = new Person("Ivan");
ivan.grow(20);
const anna = new Person("Anna");
anna.grow(18);
ivan.setFriend(anna);
console.log(ivan.hasFriend(anna));
console.log(anna.hasFriend(ivan));


