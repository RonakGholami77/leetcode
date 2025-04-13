function isAnagram(t: string, s: string): boolean {
  if (t.length !== s.length) return false;

  const counts1 = new Map<string, number>();
  const counts2 = new Map<string, number>();

  for (let i = 0; i < t.length; i++) {
    counts1.set(t[i], (counts1.get(t[i]) || 0) + 1);

    counts2.set(s[i], (counts2.get(s[i]) || 0) + 1);
  }

  console.log(counts1);
  console.log(counts2);

  for (const [key, count] of counts1) {
    if (counts2.get(key) !== count) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "cat"));

// function isAnagram(t: string, s: string): boolean {
//   if (t.length !== s.length) return false;
//
//   const counts1 = new Array(26).fill(0);
//   const counts2 = new Array(26).fill(0);
//
//   for (let i = 0; i < t.length; i++) {
//     counts1[t.charCodeAt(i) - 97]++;
//     counts2[s.charCodeAt(i) - 97]++;
//   }
//
//   console.log(counts1);
//   console.log(counts2);
//
//   for (let i = 0; i < 26; i++) {
//     if (counts1[i] !== counts2[i]) return false;
//   }
//
//   return true;
// }
