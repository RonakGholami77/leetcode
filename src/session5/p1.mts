function towSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];

    if (map.has(goal)) {
      let ands = map.get(goal)!;
      return [ands, i];
    }

    map.set(nums[i], i);
  }

  throw new Error("bad");
}

console.log(towSum([2, 7, 11, 15], 9));
console.log(towSum([3, 2, 4], 6));
console.log(towSum([3, 3], 6));

////////////////////////////////////////////////////////////////////////////
// example of how map is created by an array:
function myTest(nums: number[]) {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  return map;
}

console.log(myTest([2, 7, 11, 15]));

////////////////////////////////////////////////////////////////////////////
// it is wrong:
// function towSum(nums: number[], target: number): number[] {
//   const map = new Map();
//
//   let res = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     let sum = nums[i] + nums[i + 1];
//
//     if (sum === target) {
//       res.push(i);
//       res.push(i + 1);
//     }
//   }
//
//   return res;
// }
