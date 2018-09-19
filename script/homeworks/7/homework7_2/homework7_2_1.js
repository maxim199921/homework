let arr = prompt("Введите сообщение", "").split('');
let newarray = [];
// let startLength = arr.length;
function F(V) {
    if (V === 'а'
        || V === 'о'
        || V === 'э'
        || V === 'и'
        || V === 'у'
        || V === 'ы'
        || V === 'е'
        || V === 'ё'
        || V === 'ю'
        || V === 'я') {
        newarray.push(V);
        // arr.push(V);
    }
}
arr.forEach(F);
alert(newarray.length/*arr.length - startLength*/);


