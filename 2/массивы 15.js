const arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}

const sum = arr.reduce((acc, num) => acc + num, 0); 

const average = sum / arr.length;

console.log("Исходный массив:", arr);
console.log("Среднее арифметическое:", average);