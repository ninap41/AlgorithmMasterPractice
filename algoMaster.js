
// ****THIS DOCUMENT WILL BE A MASTER OF ALL MY ALGORITHM
// ***** WORK PREPPING FOR A JOB HUNT, STARTING WITH MOST 
// ***** BASIC ALL THE WAY TO DATA STRUCTURES AND BIT 
// ***** MANIPULATION. *******


// print sum between 1-255 ///////////////////////////////////////////////////////////////
var sum = 0;
function printSum255_withDivisibleByFive(){
    for(var i= 9; i <=255; i++){
        sum += i;
        if(i % 5 == 0){
            console.log(i + " is divisible by 5")
        }
        else{
        console.log(i)
        }
    }
    console.log(`${sum} Is the Sum!`)
}
// printSum255_withDivisibleByFive()

// FizzBuzz ///////////////////////////////////////////////////////////////

sum= 0;
function FizzBuzz(){
    for(var i= 9; i <=100; i++){
       
        if(i % 3 == 0){
            console.log("Fizz")
        }
        else if (i % 5 ==0){
            console.log("Buzz")
        }
        else{
            console.log(i + " is not a Buzz or a Fizz!")
        }
    } 
}

// FizzBuzz()

// Odd 1 - 1000 ///////////////////////////////////////////////////////////////

function Odd_1_to_1000(){
    for(var i = 0; i <=1000; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}
// Odd_1_to_1000();


// Odd sum 1 - 5000 ///////////////////////////////////////////////////////////////
function Odd_Sum_to_5000(){
    var sum= 0
    for(var i = 0; i < 5000; i++){
        if(i % 2 == 1){
            sum += i;
        }
    }
   console.log(sum)
}
// Odd_Sum_to_5000();

// Iterate through array ///////////////////////////////////////////////////////////////
var arr = ["wizards","unicorns", "faeries", "trolls"]

function ArrayAHHH(arr){
    console.log("FORWARDS ")
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    console.log("BACKWARDS")
    for(var i = arr.length-1; i >= 0 ; i--){
        console.log(arr[i])
    }
}
// ArrayAHHH(arr)

// Find MAx ///////////////////////////////////////////////////////////////
var arr2 = [10,20,18,50,27,52, 100, 300, 150]
var max = arr2[0]
function AHHH_Max(arr2){
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i] > max ){
            max = arr2[i]
        }
    }
    console.log(max)
}
// AHHH_Max(arr2);

// Find AVG ///////////////////////////////////////////////////////////////
function AHHH_AVG(arr2){
    var sum = 0;
    var avg= 0;
    for(var i = 0; i < arr2.length; i++){
       sum += arr2[i]
    }
    avg = sum / arr2.length;
    console.log(Math.floor(avg))
}
    // AHHH_AVG(arr2);


// Array with Odd 1 -255 ///////////////////////////////////////////////////////////////
function AHHH_ArrOdd_1to255(){
    var arr = []

    for(var i = 0; i <=255; i++){
        if(i % 2 == 1){
            arr.push(i)
        }
    }
    console.log(arr)
}
// AHHH_ArrOdd_1to255()

// Greater than y ///////////////////////////////////////////////////////////////

var array = [1,3, 5, 7] 
var y = 3
function greaterThan_Y(){
    for(var i =0; i <array.length; i++){
        if(array[i] > y){
            console.log(array[i])
        }
    }

}
greaterThan_Y(array,y)