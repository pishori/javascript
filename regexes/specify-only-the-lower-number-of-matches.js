let haStr = "Hazzzzah";
let haRegex = /ha[z]{4,}ah/i;
let result = haRegex.test(haStr);
console.log(result);