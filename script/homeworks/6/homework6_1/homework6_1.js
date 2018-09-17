function filtr(message) {
    return message.match(/[аоэиуыеёюяeyuioa]/g).length;
    // return message.split(/[аоэиуыеёюяeyuioa]/g).length - 1;
}

let v = filtr(prompt("Введите сообщение", ""));
let message = `В вашем сообщении : ${v} гласных`;
console.log(message);
alert(message);



