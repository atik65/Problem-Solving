export const sample_matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(matrix: number[][]): void {
  // transponse of the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // reverse each row
  for (let r = 0; r < matrix.length; r++) {
    matrix[r] = matrix[r].reverse();
  }
}

rotate(sample_matrix);

console.log(sample_matrix);
