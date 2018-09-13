let array = [];

let t = Math.round(Math.random() * 20);

for (i = 0, t; i < t; i++) {
    array.push(Math.round(Math.random() * 10));
}

function getSwap(arr) {
    var halfLength = Math.round(arr.length / 2);

    if (arr.length % 2 === 0) {
        for (var i = 0; i < arr.length; i++) {
            if (i < halfLength) {
                var halfOfHalf = halfLength / 2;

                if (i < halfOfHalf) {
                    var element = arr[halfLength - i - 1];
                    arr[halfLength - i - 1] = arr[i];
                    arr[i] = element;
                }
            }

            if (i > halfLength - 1) {
                var halfOfHalf = halfLength / 2;
                if (i < halfOfHalf + halfLength - 1) {
                    var element = arr[arr.length - i + halfLength - 1];
                    arr[arr.length - i + halfLength - 1] = arr[i];
                    arr[i] = element;
                }
            }
        }
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (i < halfLength - 1) {
                var halfOfHalf = halfLength / 2;

                if (i < halfOfHalf - 1) {
                    var element = arr[halfLength - i - 2];
                    arr[halfLength - i - 2] = arr[i];
                    arr[i] = element;
                }
            }

            if (i > halfLength - 1) {
                var halfOfHalf = halfLength / 2;
                if (i < halfOfHalf + halfLength - 1) {
                    var element = arr[arr.length - i + halfLength - 1];
                    arr[arr.length - i + halfLength - 1] = arr[i];
                    arr[i] = element;
                }
            }
        }
    }

    return arr;
};
console.log(array);

console.log(getSwap(array));