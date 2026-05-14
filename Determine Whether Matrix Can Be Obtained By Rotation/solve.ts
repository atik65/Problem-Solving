export const sample_matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export const target: number[][] = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

function findRotation(mat: number[][], target: number[][]): boolean {
  const rotate = () => {
    // transpose the sample_matrix
    for (let i = 0; i < mat.length; i++) {
      for (let j = i + 1; j < mat.length; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }

    // reverse every row
    for (let r = 0; r < mat.length; r++) {
      mat[r] = mat[r].reverse();
    }
  };

  const is_equal = () => {
    // check target
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < target.length; j++) {
        if (mat[i][j] !== target[i][j]) {
          return false;
        }
      }
    }
    // finally pass
    return true;
  };

  // check 4 times -- 0 , 90, 180, 270  degress

  for (let t = 0; t < 4; t++) {
    if (is_equal()) {
      return true;
    }

    //   otherwise rotate and check again
    rotate();
  }

  return false;
}

console.log(findRotation(sample_matrix, target));
