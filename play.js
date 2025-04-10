
document.addEventListener('DOMContentLoaded', function() {

    //  "Угадай число"
    function guessTheNumber() {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let guess;
        let attempts = 0;

        function askForGuess() {
            guess = prompt("Я загадал число от 1 до 100. Попробуйте угадать:");
            attempts++;

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
                alert(`Поздравляю! Вы угадали число ${randomNumber} с ${attempts} попытки!`);
                return;
            } else if (guess < randomNumber) {
                alert("Загаданное число больше.");
                askForGuess();
            } else {
                alert("Загаданное число меньше.");
                askForGuess();
            }
        }

        askForGuess(); 
    }


    function generateAndSolve() {
        const operators = ["+", "-", "*", "/"];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1; 
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
            if (num2 === 0) {
                generateAndSolve();  
                return;
            }
            question = `${num1} / ${num2}`;
            correctAnswer = num1 / num2;
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
            alert(`Неправильно. Правильный ответ: ${correctAnswer.toFixed(2)}`);
        }
    }

    function reverseTextGame() {
        const text = prompt("Введите текст для переворачивания:");

        if (text === null) {
            alert("Игра отменена.");
            return;
        }

        const reversedText = text.split("").reverse().join("");
        alert(`Перевернутый текст: ${reversedText}`);
    }


    function startQuiz() {
        const quiz = [
            {
                question: "Какой цвет небо?",
                options: ["1. Красный", "2. Синий", "3. Зеленый"],
                correctAnswer: 2 
            },
            {
                question: "Сколько дней в неделе?",
                options: ["1. Шесть", "2. Семь", "3. Восемь"],
                correctAnswer: 2
            },
            {
                question: "Сколько у человека пальцев на одной руке?",
                options: ["1. Четыре", "2. Пять", "3. Шесть"],
                correctAnswer: 2
            }
        ];

        let correctAnswersCount = 0;

        for (let i = 0; i < quiz.length; i++) {
            const question = quiz[i].question;
            const options = quiz[i].options.join("\n"); 
            const userAnswer = prompt(`${question}\n${options}\nВведите номер ответа:`);

            if (userAnswer === null) {
                alert("Викторина прервана.");
                return;
            }

            const parsedUserAnswer = parseInt(userAnswer);

            if (isNaN(parsedUserAnswer) || parsedUserAnswer < 1 || parsedUserAnswer > quiz[i].options.length) {
                alert("Пожалуйста, введите корректный номер ответа.");
                return;
            }

            if (parsedUserAnswer == quiz[i].correctAnswer) {
                correctAnswersCount++;
            }
        }

        alert(`Викторина завершена! Вы ответили правильно на ${correctAnswersCount} из ${quiz.length} вопросов.`);
    }

function rockPaperScissors() {
    const choices = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Выберите: камень, ножницы или бумага?");

    if (userChoice === null) {
        alert("Игра отменена.");
        return;
    }

    const userChoiceLower = userChoice.toLowerCase();

    if (!choices.includes(userChoiceLower)) {
        alert("Некорректный выбор. Пожалуйста, выберите: камень, ножницы или бумага.");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (userChoiceLower === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoiceLower === "камень" && computerChoice === "ножницы") || // Использовали || (ИЛИ), а не && (И) между этими условиями
        (userChoiceLower === "ножницы" && computerChoice === "бумага") || // Использовали || (ИЛИ), а не && (И) между этими условиями
        (userChoiceLower === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Ваш выбор: ${userChoiceLower}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}


    const play1Button = document.getElementById("play1");
    const play2Button = document.getElementById("play2");
    const play3Button = document.getElementById("play3");
    const play4Button = document.getElementById("play4");
    const play5Button = document.getElementById("play5");

    play1Button.addEventListener("click", guessTheNumber);
    play2Button.addEventListener("click", generateAndSolve);
    play3Button.addEventListener("click", reverseTextGame);
    play4Button.addEventListener("click", startQuiz);
    play5Button.addEventListener("click", rockPaperScissors);

});