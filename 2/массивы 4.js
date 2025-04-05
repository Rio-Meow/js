const rows = 3;
const cols = 3;
const multiArray = [];

for (let i = 0; i < rows; i++) {
  multiArray[i] = []; 

  for (let j = 0; j < cols; j++) {
    multiArray[i][j] = 1; 
  }
}

console.log(multiArray);