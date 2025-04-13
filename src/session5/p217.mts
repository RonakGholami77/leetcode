function containesDuplicates(arr: number[]): boolean {
  const example = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (example.has(arr[i])) {
      return true;
    }

    example.add(arr[i]);
  }
  return false;
}

console.log(containesDuplicates([1, 2, 3, 4, 1]));

//it is wrong:
// function containesDuplicates(arr: number[]): boolean {
//   const example = new Set(arr);
//
//   console.log(example);
//
//   return example.size !== arr.length;
// }
//
// console.log(containesDuplicates([1, 2, 3, 4, 1]));
