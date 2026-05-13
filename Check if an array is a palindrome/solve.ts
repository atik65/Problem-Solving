const test_input = "A man, a plan, a canal: Panama";

function is_palindrome(s: string): boolean {
  const cleaned_string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed_string = cleaned_string.split("").reverse().join("");
  return cleaned_string === reversed_string;
}

console.log(is_palindrome(test_input));
