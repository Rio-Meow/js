const arr = [1, 5, 2, 8, 3, 9, 4, 7, 6, 10]; 

for (let i = 0; i < arr.length - 1; i++) {
  const sum = arr[i] + arr[i + 1];
  console.log(`Сумма элементов ${arr[i]} и ${arr[i + 1]}: ${sum}`);
}