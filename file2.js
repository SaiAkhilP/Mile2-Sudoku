let puzz = 
[[0, 0, 0, 2, 6, 0, 7, 0, 1],
[6, 8, 0, 0, 7, 0, 0, 9, 0],
[1, 9, 0, 0, 0, 4, 5, 0, 0],
[8, 2, 0, 1, 0, 0, 0, 4, 0],
[0, 0, 4, 6, 0, 2, 9, 0, 0],
[0, 5, 0, 0, 0, 3, 0, 2, 8],
[0, 0, 9, 3, 0, 0, 0, 7, 4],
[0, 4, 0, 0, 5, 0, 0, 3, 6],
[7, 0, 3, 0, 1, 8, 0, 0, 0]];


  let ar=' ';
console.log("\nPuzzle : ")
for(let i=0;i<9;i++)
{
  for(let j=0;j<9;j++)
  {
    ar+=puzz[i][j]+' ';
  }
  console.log(ar);
  ar=' ';
}

solve(puzz);

console.log("\nAnswer : ")
for(let i=0;i<9;i++)
{
  for(let j=0;j<9;j++)
  {
    ar+=puzz[i][j]+' ';
  }
  console.log(ar);
  ar=' ';
}

function check(gr, row, col, k) {
  for (let i = 0; i < 9; i++) {
      let m =  Math.floor(row/3)*3 + Math.floor(i/3) ;
      let n = Math.floor(col/3)*3 + (i % 3);
       if (gr[row][i] == k || gr[i][col] == k || gr[m][n] == k) {
      return false;
      }
      }
      return true;
  }

function solve(grid) {
for (let i=0;i<9;i++) {
  for (let j=0;j<9;j++) {
    if (grid[i][j]==0) {
      for (let k=1;k<=9;k++) {
        if (check(grid,i,j,k)==true) {
          grid[i][j]=k;
        if (solve(grid)) {
         return true;
        } 
        else {
        grid[i][j] = 0;
        }
       }
     }
     return false;
   }
 }
}
return true;
}