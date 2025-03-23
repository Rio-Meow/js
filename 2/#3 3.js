function calculateSquare(number) {
    let square = number * number;
    return square;
  }
  
  let result1 = calculateSquare(5);
  console.log(result1);  
  
  let result2 = calculateSquare(3) + calculateSquare(4);
  console.log(result2); 
  
  function printMessage(num) {
      console.log("Квадрат числа равен: " + num);
  }
  
  let result3 = calculateSquare(7);
  printMessage(result3); 
  