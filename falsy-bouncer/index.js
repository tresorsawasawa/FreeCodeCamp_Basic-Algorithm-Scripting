function bouncer(arr) {
    return arr.filter((elem) => !! elem);
  }
  
  // !9 = false;
  // !0 = true
  
  console.log(bouncer([7, "ele", false, 9]));