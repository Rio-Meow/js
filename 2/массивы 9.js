const multiArray = [[1, 2, 3], [4, 5, 6]];

const flattenedArray3 = [];
for (let i = 0; i < multiArray.length; i++) {
  for (let j = 0; j < multiArray[i].length; j++) {
    flattenedArray3.push(multiArray[i][j]);
  }
}

console.log(flattenedArray3);