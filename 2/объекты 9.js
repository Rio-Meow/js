const currentDate = new Date();

const futureDate = new Date(currentDate.getTime() + (73 * 24 * 60 * 60 * 1000));

console.log("Текущая дата:", currentDate);
console.log("Дата через 73 дня:", futureDate);