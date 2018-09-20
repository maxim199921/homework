let arr = prompt("Введите сообщение", "").split('');

let array = arr.filter((el) => {
        return el === 'а'
            || el === 'о'
            || el === 'э'
            || el === 'и'
            || el === 'у'
            || el === 'ы'
            || el === 'е'
            || el === 'ё'
            || el === 'ю'
            || el === 'я';
    });

let message = `В вашем сообщении : ${array.length} гласных`;
console.log(message);
alert(message);


