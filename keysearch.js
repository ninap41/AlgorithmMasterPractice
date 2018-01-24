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