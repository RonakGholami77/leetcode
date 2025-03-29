function reverse(x: number): number {

  if(x===0){
    return 0;
  }

  let isNegative = false;
  if(x < 0 ){
    x = -x ;
    isNegative = true;
  }

  const digit = x % 10;
  const rank = Math.floor(Math.log10(x));
  const reversed = digit * Math.pow(10 ,rank);

  const other = Math.floor(x / 10);

  const otherReversed = reverse(other);

  const result = (isNegative ? -1 : 1 ) * (reversed + otherReversed);
  return isInt(result) ? result : 0;
}

function isInt(x: number): boolean {
  return -2_147_483_648 <= x && x <= 2_147_483_648
}

console.log(reverse(123))
// console.log(reverse(12))
console.log(reverse(-123))
// Output: 321