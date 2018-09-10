function areArraysEqual(a1, a2) {
    if (a1 !== null && a2 !== null && a1.length === a2.length) {
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }

        return true;
    } else {
        return false;
    }
}

console.log(areArraysEqual([1, 2, 3], [1, 2, "3"])); // false
console.log(areArraysEqual([1, 2, 3], [1, 4, 5])); // false
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([], null)); // false