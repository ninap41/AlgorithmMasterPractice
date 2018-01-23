
// ****THIS DOCUMENT WILL BE A MASTER OF ALL MY ALGORITHM
// ***** WORK PREPPING FOR A JOB HUNT, STARTING WITH MOST 
// ***** BASIC ALL THE WAY TO DATA STRUCTURES AND BIT 
// ***** MANIPULATION. *******


// print sum between 1-255 ///////////////////////////////////////////////////////////////
sum= 0;
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


// Odd 1 - 1000 ///////////////////////////////////////////////////////////////
