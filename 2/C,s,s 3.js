let intervalId;
let secondsPassed = 0;

intervalId = setInterval(() => {
  const currentDate = new Date();
  console.log(currentDate);
  secondsPassed += 3;

  if (secondsPassed >= 30) {
    clearInterval(intervalId); 
    setTimeout(() => {
      console.log("30 секунд прошло");
    }, 0); 
  }
}, 3000);