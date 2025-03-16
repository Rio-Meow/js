function greetUser() {
    let age = prompt("Сколько вам лет?");
  
    if (age === null) {
      console.log("Вы отменили ввод."); 
      return; 
    }
  
    age = parseInt(age); 
  
    if (isNaN(age)) {
      console.log("Вы ввели не число.");
      return; 
    }
  
  
    if (age < 0) {
      console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
      console.log('Привет, друг!');
    } else {
      console.log('Добро пожаловать!');
    }
  }

  greetUser();