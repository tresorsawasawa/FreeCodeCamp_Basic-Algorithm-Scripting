function truncateString(str, num) {
    let finalString = str;
  
    if(str.length > num){
      finalString = str.slice(0, num) + "...";
    }
    return finalString;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));