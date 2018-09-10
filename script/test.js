var arr = [];
var max = 7;
var randomnumber;

while (arr.length < max) {
    randomnumber = Math.floor(Math.random() * 10);
    arr.push(randomnumber);
}

function getNewArraySwap(arr) {
    const left = Math.floor(a.length / 2);
    return [ ...arr.slice(left+1) , arr[left], ...arr.slice(0, left) ];
}

console.log(arr);
console.log(getNewArraySwap(arr));
