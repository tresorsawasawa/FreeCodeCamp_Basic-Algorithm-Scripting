function frankenSplice(arr1, arr2, n) {
    const newArr = [...arr2];
    newArr.splice(n, 0, ...arr1);
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));