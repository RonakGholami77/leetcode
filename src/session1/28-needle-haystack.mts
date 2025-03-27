function strStr(haystack: string, needle: string): number {

  let start = 0;

  while( start <= haystack.length - needle.length) {

    let indexHaystack = 0;
    let indexNeedle = 0;

    while (indexHaystack <= haystack.length +1) {
      if(haystack[indexHaystack] !== needle[indexNeedle]) {

        start++;
        indexHaystack = start;
        indexNeedle = 0;

      }else{

        if(indexNeedle === needle.length - 1){
          return start;
        }

        indexHaystack++;
        indexNeedle++;
      }

    }
  }

  return -1;
}


const haystack = "hello"
const needle = "ll"

console.log(strStr(haystack , needle))








// function strStr(haystack: string, needle: string): number {
//
//   let start = 0;
//
//   while( start <= haystack.length - needle.length) {
//     let index = 0;
//
//     while (index < needle.length ) {
//       if (haystack[start + index] !== needle[index]) {
//         break;
//       }
//
//       index++;
//     }
//
//     if(index >= needle.length){
//       return start;
//     }
//
//     start++;
//
//   }
//
//   return -1;
// }
//
//
// const haystack = "mississippi"
// const needle = "issip"
//
// console.log(strStr(haystack , needle))