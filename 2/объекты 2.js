function filterArrayByPrefix(arr, prefix) {
    if (!Array.isArray(arr)) {
      return "Ошибка: Первый аргумент должен быть массивом.";
    }
    if (typeof prefix !== 'string') {
      return "Ошибка: Второй аргумент должен быть строкой.";
    }
  
    const lowerCasePrefix = prefix.toLowerCase(); 
    const filteredArray = arr.filter(str => {
      if (typeof str !== 'string') {
        return false; 
      }
      const lowerCaseStr = str.toLowerCase(); 
      return lowerCaseStr.startsWith(lowerCasePrefix); 
    });
    return filteredArray;
  }
  