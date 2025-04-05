function getNegativeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Ошибка: Входной параметр должен быть массивом.";
    }

    if (arr.some(item => typeof item !== 'number' || !Number.isInteger(item))) {
        return "Ошибка: Массив должен содержать только целые числа.";
    }

    return arr.filter(num => num < 0);
}