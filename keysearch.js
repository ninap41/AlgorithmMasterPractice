var arr = [24, 8, 23, 3];


function linearSearch(key,arr){
    keycount = 0
    for(var idx=0; idx <arr.length; idx++){
        if(arr[idx] == key){
            keycount++
            console.log(idx)
        }
    }
    if(keycount == 0){
        console.log(false)
    }
}

linearSearch(8, arr);   // => 1
linearSearch(-99, arr);

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