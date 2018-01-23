
// ****THIS DOCUMENT WILL BE A MASTER OF ALL MY ALGORITHM
// ***** WORK PREPPING FOR A JOB HUNT, STARTING WITH MOST 
// ***** BASIC ALL THE WAY TO DATA STRUCTURES AND BIT 
// ***** MANIPULATION. *******



// ****Random ARRAY
// ***** and
// ***** Reverse Array
// ***** Use CALLBACK*******
// Random Array and reverse array///////////////////////////////////////////////////////////////

var newarray = [];
function randomArr(newarray){
   
    for(var i = 0; i <=10; i++){
        newarray.push(Math.floor(Math.random(1) *100))
    }
    console.log(newarray)
    console.log(reverseArr(newarray))
}

function reverseArr(arr){
    reversearr = []
    for(var i = arr.length -1; i >= 0; i--){
        reversearr.push(arr[i])
    }
    return reversearr;
}

// one call 
// randomArr(newarray)



// ****Random ARRAY
// ***** and
// ***** Reverse Array
// ***** Use CALLBACK*******


//////////Insert X in Y ////////////////////////////////////////////////////////////////
//x is the number
// y is the index
InsertArr= [10,50,40,80,70]
 x = 33
 y = Math.floor(Math.random(0) * InsertArr.length)
 //the random index
 console.log(y)
 //the value
 x = 33
function numberInsert(InsertArr, x, y){
    for(var i =0; i <InsertArr.length; i++){
        if(InsertArr[y] == InsertArr[i]){
            InsertArr.splice(y, 0, x);
            //splice meaning, y index, 0 deletions, and the x value
        }
    }
    console.log(InsertArr)  
}
numberInsert(InsertArr, x, y)



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
// greaterThan_Y(array,y)

//square values ///////////////////////////////////////////////////////////////

function squareVal(arr2) {
    for (var i= 0; i<arr2.length; i++){
        arr2[i]= arr2[i] * arr2[i];
    }
    console.log(arr2); 
}
// squareVal(arr2)

//max min avg ///////////////////////////////////////////////////////////////

function maxMinAvg(arr2) {
    var max = arr2[0];
    var min = arr2[0];
    var avg = arr2[0]
    var sum = 0;
    for ( var i = 1; i< arr2.length; i++){
        if (arr2[i] > max){
            max = arr2[i];
        }
        if (arr2[i] < min) {
            min = arr2[i];
        }
        sum = sum + arr2[i];
    }
    var avg = Math.floor(sum / arr2.length);
    var arrnew = [max,min,avg];
    console.log(arrnew)
}
// maxMinAvg(arr2)

// No Neggie ///////////////////////////////////////////////////////////////
var arrHUH = [-3,10,-10,79]
function noNeg(arr2) {
  
    for(var i = 0; i < arr2.length; i ++){
        if ( arr2[i] < 0) {
           arr2[i] = 0;
        }
    }
    console.log(arr2); 
}
// noNeg(arrHUH) 

// Shifting numbers in array  ///////////////////////////////////////////////////////////////

var shiftArr = arr2
function shiftArray(shiftArr){
    for(var i = 0; i < shiftArr.length; i ++){
        if(i == shiftArr.length-1){
            shiftArr[i] = 0
        }
        else {
            shiftArr[i] = shiftArr[i+1]
        }
    }
    console.log(shiftArr)
}
// shiftArray(shiftArr);

// number to string ///////////////////////////////////////////////////////////////
var arrHUH2 = [-3,10,-10,79]

function noNegtoString(arr3) {
  
    for(var i = 0; i < arr3.length; i ++){
        if ( arr3[i] < 0) {
           arr3[i] = "Dojo";
        }
    }
    console.log(arr3); 
}
// noNegtoString(arrHUH2) ;


// anotherArr = [35, 15, 3, 39, 53, 93, 25, 39, 59, 21]



