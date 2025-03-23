let monthNumber = 12;

if (monthNumber > 12) {
  console.log("Ошибка: Номер месяца не может быть больше 12.");
} else {
  let season;

  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = "зима";
      break;
    case 3:
    case 4:
    case 5:
      season = "весна";
      break;
    case 6:
    case 7:
    case 8:
      season = "лето";
      break;
    case 9:
    case 10:
    case 11:
      season = "осень";
      break;
    default:
      season = "Неизвестный сезон"; // Для обработки невалидных номеров (например, 0 или отрицательных)
  }

  console.log(`Месяц ${monthNumber} принадлежит к сезону "${season}".`);
}