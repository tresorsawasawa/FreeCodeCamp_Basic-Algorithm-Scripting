function repeatStringNumTimes(str, num) {
    if(num < 0) return ""
   return new Array(num).fill(str).join('');
 }
 
 console.log(repeatStringNumTimes("abc", 3));