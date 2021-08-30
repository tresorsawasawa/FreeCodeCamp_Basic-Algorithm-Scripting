function titleCase(str) {

    return str.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(' ')
  }
  
  console.log(titleCase("I'm a little tea pot"));