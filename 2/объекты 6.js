function generateRandomArray(number) {
    if (!Number.isInteger(number) || number <= 0) {
      return "Ошибка: Введите положительное целое число.";
    }
  
    const arrayLength = Math.floor(number / 2); 
    const randomArray = [];
  
    for (let i = 0; i < arrayLength; i++) {
      const randomNumber = Math.floor(Math.random() * (number + 1)); 
      randomArray.push(randomNumber);
    }
  
    return randomArray;
  }
  
  console.log(generateRandomArray(10));
  console.log(generateRandomArray(20));