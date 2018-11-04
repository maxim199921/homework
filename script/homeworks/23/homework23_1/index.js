let str = "255.255.255.255";
let str1 = "4.1.1.1";
let str2 = "11.22.11.223";
let str3 = "355.255.255.255";


let re = /^(25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3}/;


console.log(re.test(str));
console.log(re.test(str1));
console.log(re.test(str2));
console.log(re.test(str3));