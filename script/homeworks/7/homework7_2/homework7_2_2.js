let arr = prompt("Введите сообщение", "").split('');
let arrOfVowels = ['а','о','э','и','у','ы','е','ё','ю','я'];

let numberOfVowels = arr.reduce((previousValue, el) => {
    if (arrOfVowels.indexOf(el) !== -1) {
        previousValue = previousValue + el;
    }
    return previousValue;
}).length;

alert(numberOfVowels);