function selectionSort(nums:number[]):number[]{

    for(let i= 0 ; i<nums.length ;i++){
      let minIndex = i;

      for(let j= i + 1 ; j<nums.length ; j++){
        if(nums[minIndex] > nums[j]){
          minIndex = j ;
        }
      }

      let swap = nums[i];
      nums[i] = nums[minIndex]
      nums[minIndex] = swap;

    }
    return nums;
}

console.log(selectionSort([0,4,3,3,0,1,2]));
console.log(selectionSort([5,1,1,2,0,0]));