
// bubble sort
let arr = [15, 12, 14, 29, 17, 10, 28];

console.log('Input array before sorting: ', arr);

for(i=arr.length-1; i > 0; i--){
  for(j=0; j<i; j++){
      if(arr[j] > arr[i])
        swap(i,j);
  }
}

function swap(i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log('Elements after sorting: ', arr);