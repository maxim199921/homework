function filtr () {
    let message = prompt("Введите сообщение", "");
    i = message.match(/[аоэиуыеёюяeyuioa]/g);
    i = i.length;
    // i = message.split(/[аоэиуыеёюяeyuioa]/g);
    // i = i.length - 1;
    return i;
}
let v = filtr();
let message = `В вашем сообщении : ${v} гласных`;
console.log(message);
alert(message);



