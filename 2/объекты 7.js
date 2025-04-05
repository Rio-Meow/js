function getRandomNumberInRange(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      return "Ошибка: Оба аргумента должны быть целыми числами.";
    }
  
    if (min >= max) {
      return "Ошибка: Минимальное значение должно быть меньше максимального.";
    }
  
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  

  console.log(getRandomNumberInRange(1, 10));   
  console.log(getRandomNumberInRange(100, 200)); 
