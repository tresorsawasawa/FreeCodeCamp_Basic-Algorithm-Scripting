function chunkArrayInGroups(arr, size) {
    let index = 0;
    let finalArr = [];
    let innerArr = [];
    for(let i=0; i<arr.length; i++){
      innerArr.push(arr[i]);
  
      index++;
  
    if(index === size){
      finalArr.push(innerArr);
      innerArr = [];
      index = 0;
      }
    }
    if(innerArr.length > 0){
      finalArr.push(innerArr);
    }
    return finalArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));