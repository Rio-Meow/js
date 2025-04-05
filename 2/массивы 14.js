const arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 11));
}

const evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Исходный массив:", arr);
console.log("Массив с четными числами:", evenNumbers);