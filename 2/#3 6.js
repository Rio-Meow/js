function cubeNumber() {
    let input = prompt("Введите число:");

    if (input === null) {
      return "Ввод отменен пользователем";
    }

    let number = Number(input);

    if (isNaN(number)) {
      return 'Переданный параметр не является числом';
    } else {
      let cube = number * number * number;
  
      return `n в кубе равняется ${cube}`;
    }
  }
  
  for (let i = 0; i <= 10; i++) {
    let result = cubeNumber();  
    console.log(result); 
  }