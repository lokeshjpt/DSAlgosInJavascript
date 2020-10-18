
function factorial(n){
  if(n===1)
    return 1;
  else 
    return n * factorial(n-1);
}

console.log('factorial(5) is ', factorial(5));

let arr = new Array();

arr.push(10);
arr.push(15);
arr.push(17);
arr.push(18);

console.log(arr);
