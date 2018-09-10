var array = [];

for (var i=0, t=7; i<t; i++) {
    array.push(Math.round(Math.random() * 10));
}

function getSwap(arr) {
    var halfLength = Math.round(arr.length / 2);

    if (arr.length % 2 === 0) {
        for (var i = 0; i < halfLength; i++) {
            var element = arr[i + halfLength];
            arr[i + halfLength] = arr[i];
            arr[i] = element;
        }
    } else {
        for (var i = 0; i < halfLength - 1 ; i++) {
            var element = arr[i + halfLength];
            arr[i + halfLength] = arr[i];
            arr[i] = element;
        }
    }

    return arr;
};
console.log(array);

console.log(getSwap(array));