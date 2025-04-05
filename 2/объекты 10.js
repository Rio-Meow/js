function formatDate(date) {
    if (!(date instanceof Date)) {
      return "Ошибка: Введите объект Date.";
    }
  
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
  
    const weekdays = [
      "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];
  
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
  
    const hours = String(date.getHours()).padStart(2, '0'); 
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0'); 
  
  
    const formattedDateString = `Дата: ${dayOfMonth} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
  
    return formattedDateString;
  }
  
  const today = new Date();
  console.log(formatDate(today));
  
  const someDate = new Date(2024, 0, 15, 10, 30, 0); 
  console.log(formatDate(someDate));
  console.log(formatDate("не дата")); 