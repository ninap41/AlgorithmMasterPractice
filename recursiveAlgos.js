//Recursion test
function rSum(n) {
    if (n === 1) {
      return 1;
    } else {
      return rSum(n-1) + n;
      //decrementing and adding 12
      //12 + 12
      //11 + 11
    }
  }

//rSum(5)
//5  + rSum(4)
//4 + rSum(3)
  rSum(5)
//is same as
console.log(5+4+3+2+1 )
  rSum(5)
  
  
  function iSum(num){
      sum = 0
    for(var i=0;i <= num ; i++){
        sum += i;
        }
        console.log(sum)
}
iSum(20)