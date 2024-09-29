function removeEveryOther(arr) {
    let result = [];  
    for (let i = 0; i < arr.length; i+=2) {
      result.push(arr[i]);
    }
    return result;
  }
  
  console.log(removeEveryOther([1, 2, 3, 4, 5, 6]));  // [1, 3, 5]
  console.log(removeEveryOther(['Ssup', 'bro?', 'All', 'good?']));  // ['Ssup', 'All']
  