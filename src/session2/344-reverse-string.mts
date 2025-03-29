function reverseString(s: string[]): void {

 const res = s.length -1 ;

  for(let i = 0; i < res ; i++) {
    let j = res - i;

    if(i<= j){
      let right = s[j];
      let left = s[i];

      let temp = right;
      s[j] = left;
      s[i] = temp;
    }

  }
}

let input = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
reverseString(input)
console.log(input);
// Output: ["o","l","l","e","h"]







///////////////////////////////////////////////////////////////////////

function reverseStringBest(s: string[]): void {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];

    start++;
    end--;
  }
}