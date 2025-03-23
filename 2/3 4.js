let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
  };
  
  for (let key in obj) {
    console.log(`${key} — ${obj[key]} долларов`);
  }
