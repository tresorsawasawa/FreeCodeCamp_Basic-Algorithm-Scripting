function mutation(arr) {
    let [str1, str2] = arr;
  
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
  
    for(let i=0; i<str2.length; i++){
      const letter = str2[i];
      if(str1.indexOf(letter) === -1){
        return false;
      }
    }
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));