let arr = prompt("Введите сообщение", "").split('');

let array = arr.filter(function(V) {
        return V === 'а'
            || V === 'о'
            || V === 'э'
            || V === 'и'
            || V === 'у'
            || V === 'ы'
            || V === 'е'
            || V === 'ё'
            || V === 'ю'
            || V === 'я';
    });

let message = `В вашем сообщении : ${array.length} гласных`;
console.log(message);
alert(message);


