function mergeSort(nums: number[]): number[] {

  function sort(left:number , right:number){
    if(left >= right){
      return;
    }

    let mid = Math.floor((left+right)/2);

    sort(left , mid );
    sort(mid +1 , right);

    merge(left , mid , right);
  }

  function merge(left:number, mid:number, right:number){
    let leftNums = nums.slice(left , mid+1);
    let rightNums = nums.slice(mid+1 , right +1);

    let indexLeft = 0;
    let indexRight = 0;
    let mergeIndex = left

    while(indexLeft < leftNums.length && indexRight < rightNums.length ){
      if(leftNums[indexLeft] < rightNums[indexRight]){
         nums[mergeIndex] = leftNums[indexLeft];
         mergeIndex++;
         indexLeft++
      }else{
        nums[mergeIndex] = rightNums[indexRight];
        mergeIndex++;
        indexRight++
      }
    }

    while(indexLeft < leftNums.length ){
      nums[mergeIndex] = leftNums[indexLeft];
      indexLeft++;
      mergeIndex++;
    }

    while(indexRight < rightNums.length ){
      nums[mergeIndex] = rightNums[indexRight];
      mergeIndex++;
      indexRight++
    }

  }

  sort(0 , nums.length - 1);
  return nums;
}

console.log(mergeSort([5, 2, 3, 1]));
console.log(mergeSort([5, 1, 1, 2, 0, 0]));