function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (nums[left] !== val && left <= right) {
      left++;
    }

    if (left > right) {
      break;
    }

    while (nums[right] === val && left <= right) {
      right--;
    }

    if (left > right) {
      break;
    }

    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }

  return left;  //numbers of elements that are not equal val
}

// const numbers = [1];
// const k1 = removeElement(numbers, 1);
// console.log(numbers, k1);

const nums = [1, 2, 3, 4, 5, 6, 7, 3, 9];
const k1 = 3;
console.log(removeElement(nums, k1));
