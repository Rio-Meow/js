function guessTheNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    let guess;

    function askForGuess() {
      guess = prompt("Угадайте число от 1 до 100:");

      if (guess === null) {
        alert("Игра отменена.");
        return;
      }
  
      guess = parseInt(guess);
  
      if (isNaN(guess)) {
        alert("Пожалуйста, введите число.");
        askForGuess(); 
        return;
      }
  
      if (guess === randomNumber) {
        alert(`Поздравляю! Вы угадали число ${randomNumber}!`);
      } else if (guess < randomNumber) {
        alert("Загаданное число больше.");
        askForGuess(); 
      } else {
        alert("Загаданное число меньше.");
        askForGuess(); 
      }
    }
  
    
    alert("Я загадал число от 1 до 100. Попробуйте угадать!");
    askForGuess();
  }
  
  guessTheNumber();