function maxProfit(prices: number[]): number {

  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {

    if (prices[left] < prices[right]) {
      let currentProfit = prices[right] - prices[left];

      if( currentProfit >maxProfit) {
        maxProfit = currentProfit;

      }

      right++;
    }else{

      left = right;
      right++;
    }



  }

  return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));




//
// function maxProfit(prices: number[]): number {
//   let maxProfit = 0;
//
//   let left = 0;
//   let right = 1;
//
//   while (right < prices.length) {
//     let currentProfit = prices[right] - prices[left];
//
//     if(maxProfit < currentProfit) {
//       maxProfit = currentProfit;
//     }
//
//     if (prices[left] > prices[right]) {
//
//       left = right;
//     }
//
//     right++;
//
//   }
//
//   return maxProfit;
// };