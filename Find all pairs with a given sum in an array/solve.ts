const numbers = [2, 7, 5, 6, 4, 8, 1, 3];
const targetSum = 9;

function find_pairs_target_sum(
  numbers: number[],
  target_sum: number,
): number[][] {
  const founded_pairs: number[][] = [];

  const tracker: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    const needed_value = target_sum - numbers[i];

    if (needed_value in tracker) {
      founded_pairs.push([needed_value, numbers[i]]);
    }

    tracker[numbers[i]] = i;
  }

  return founded_pairs;
}

console.log(find_pairs_target_sum(numbers, targetSum));
