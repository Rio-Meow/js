function multiplyIfNumbers(a, b) {
    let numA = Number(a);
    let numB = Number(b);
  
    if (isNaN(numA) || isNaN(numB)) {
      return 'Одно или оба значения не являются числом';
    } else {

      return numA * numB;
    }
  }
  

  console.log(multiplyIfNumbers(5, 3));        
  console.log(multiplyIfNumbers('2', 4));      
