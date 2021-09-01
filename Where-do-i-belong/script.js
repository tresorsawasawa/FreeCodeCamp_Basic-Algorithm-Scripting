function getIndexToIns(arr, num) {
  let index = arr.sort(customer).findIndex(elem => elem >= num);
  return index === -1 ? arr.length : index;
}
function customer(a, b){
  return a - b;
}
console.log(getIndexToIns([40, 60], 50));