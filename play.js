
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


function generateAndSolve() {
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 10) + 1; // от 1 до 10
  const num2 = Math.floor(Math.random() * 10) + 1; // от 1 до 10
  let question;
  let correctAnswer;

  switch (operator) {
    case "+":
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case "*":
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    case "/":
      question = `${num1} / ${num2}`;
      if (num2 === 0) {
        question = `${num1} / 1`; 
        correctAnswer = num1;
      } else {
        question = `${num1} / ${num2}`;
        correctAnswer = num1 / num2;
      }
      break;
  }

  const userAnswer = prompt(`${question} = ?`);

  if (userAnswer === null) {
    alert("Тренировка прервана.");
    return;
  }

  const parsedUserAnswer = parseFloat(userAnswer);

  if (isNaN(parsedUserAnswer)) {
    alert("Пожалуйста, введите число!");
    return;
  }

  if (correctAnswer.toFixed(2) === parsedUserAnswer.toFixed(2)) {
    alert("Правильно!");
  } else {
    alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
  }
}


const play1Button = document.getElementById("play1");
const play2Button = document.getElementById("play2");

play1Button.addEventListener("click", guessTheNumber);
play2Button.addEventListener("click", generateAndSolve);