function getWordLengths(arr) {
    if (!Array.isArray(arr)) {
      return "Ошибка: Входной параметр должен быть массивом.";
    }
  
     if (arr.some(item => typeof item !== 'string')) {
        return "Ошибка: Массив должен содержать только строки.";
    }
  
    return arr.map(str => str.length);
  }