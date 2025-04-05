function insertionSort(arr: number[]):number[]{

    for(let i=1 ; i <= arr.length; i++){
      for(let j = i ; j > 0 ; j--){

        if(arr[j] < arr[j-1]){
          let swap = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = swap;
        }else{
          break;
        }
      }
      
    }

  return arr;
}

// console.log(insertionSort([2,4,1,1,3,0]));
// console.log(insertionSort([5,1,2,2,0,0]));
console.log(insertionSort([0,1,2,3,4,5,6]));