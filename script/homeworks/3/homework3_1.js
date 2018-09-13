let array = [];
let t = Math.round(Math.random() * 20);


for (i = 0, t ; i < t; i++) {
    array.push(Math.round(Math.random() * 10));
}

function getSwap(arr) {
    let element;
    let halfLength = Math.round(arr.length / 2);

    if (arr.length % 2 === 0) {
        for (i = 0; i < halfLength; i++) {
            element = arr[i + halfLength];
            arr[i + halfLength] = arr[i];
            arr[i] = element;
        }
    } else {
        for (i = 0; i < halfLength - 1; i++) {
            element = arr[i + halfLength];
            arr[i + halfLength] = arr[i];
            arr[i] = element;
        }
    }

    return arr;
};
console.log(array);

console.log(getSwap(array));