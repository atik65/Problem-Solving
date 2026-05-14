// Leetcode problem: https://leetcode.com/problems/reverse-words-in-a-string/

const input = "a good   example";

function reverse_words(s: string): string {
  const words = s
    .trim()
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word.trim());
  const reversed_words = words.reverse();

  return reversed_words.join(" ");
}

// solution with regex to split with all whitespace
function reverse_words_another(s: string): string {
  const words = s
    .trim()
    .split(/\s+/)
    .map((word) => word.trim());
  const reversed_words = words.reverse();

  return reversed_words.join(" ");
}

console.log(reverse_words(input));
