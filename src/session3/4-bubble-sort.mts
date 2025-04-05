function bubbleSort(arr : number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
      let isSwapped = false;

      for (let j = 0; j < arr.length-i; j++) {

        if(arr[j] > arr[j+1]){
          let swap = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = swap;

          isSwapped = true;
        }
      }


      if(!isSwapped){
        break
      }
    }

  return arr;
}

console.log(bubbleSort([5,6,1,3]));

//at large scale of array it does not suitable.