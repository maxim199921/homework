let arr = prompt("Введите сообщение", "").split('');
let counter = 0;
let arrOfVowels = ['а','о','э','и','у','ы','е','ё','ю','я'];

arr.forEach((el) => {
    if (arrOfVowels.indexOf(el) !== -1) {
        console.log(el);
        counter++;
    }
});

alert(counter);
