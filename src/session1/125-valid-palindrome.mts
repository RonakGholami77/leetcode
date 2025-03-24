function isPalindrome(s: string): boolean {
  const text = normalize(s);

  let left = 0;
  let right = text.length - 1;

  while (left <= right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function normalize(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();

    if (isAlphanumeric(char)) {
      result += char;
    }
  }

  return result;
}

function isAlphanumeric(char: string) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

console.log(isPalindrome("cayyac"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
