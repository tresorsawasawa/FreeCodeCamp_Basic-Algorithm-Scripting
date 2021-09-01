function getIndexToIns(arr, num) {
    // let index = arr.sort(customer).findIndex(elem => elem >= num);
    // return index === -1 ? arr.length : index;
  
    let sortedArray = arr.sort(customer);
    let index = arr.length;
  
    for(let i = 0; i < sortedArray.length; i++){
      if(sortedArray[i] >= num){
        index = i;
        break;
      }
    }
    return index;
  }
  function customer(a, b){
    return a - b;
  }
  console.log(getIndexToIns([40, 60], 70));