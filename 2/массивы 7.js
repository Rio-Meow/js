const arr = [9, 8, 7, 6, 5];

const guess = prompt("Угадайте число из массива: " + arr.join(', '));

if (guess === null) {
  alert("Вы отменили ввод.");
} else {
  const guessedNumber = parseInt(guess); 

  if (isNaN(guessedNumber)) {
    alert("Пожалуйста, введите число!");
  } else {
    if (arr.includes(guessedNumber)) {
      alert("Угадал");
    } else {
      alert("Не угадал");
    }
  }
}