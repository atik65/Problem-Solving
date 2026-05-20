// 1. split with ''
// 2. manage a set and stack to track the unique letters and their order
// 3. loop through the string and and
//  4. if stack if empty, add the letter to the stack and set
// 5. if stack is not empty and the letter is not in the set.
// 6. if the letter is smaller than stack top and the stack top appears later in the string, pop the stack and remove it from the set
// 7. add the letter to the stack and set

let test_string = "bcabc";

function removeDuplicateLetters(s: string): string {
  const stack: string[] = [];
  const set = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (set.has(item)) continue;

    while (
      stack.length &&
      item < stack[stack.length - 1] &&
      s.lastIndexOf(stack[stack.length - 1]) > i
    ) {
      set.delete(stack.pop()!);
    }


    stack.push(item);
    set.add(item);

  }
  return stack.join("");
}

console.log(removeDuplicateLetters(test_string));
