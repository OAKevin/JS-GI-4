function Change(coins, amount) {
    const arr = Array(amount + 1);
  
    arr[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      arr[i] = -1;
    }
  
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        if (arr[i - coin] !== -1) {
          if (arr[i] === -1) {
            arr[i] = arr[i - coin] + 1;
          } else {
            arr[i] = Math.min(arr[i], arr[i - coin] + 1);
          }
        }
      }
    }
  
    return arr[amount];
  }
  
  // Example usage
 
  console.log(Change([1,2,5], 11)); 