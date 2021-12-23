const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// TINY ARRAY

perf.start();
doublerAppend(tinyArray)
let tinyArrayAppend = perf.stop()

perf.start();
doublerInsert(tinyArray)
let tinyArrayInsert = perf.stop()

console.log('Results for the tinyArray')
console.log("append", tinyArrayAppend.preciseWords);
console.log("insert", tinyArrayInsert.preciseWords);

//SMALL ARRAY

perf.start();
doublerAppend(smallArray)
let smallArrayAppend = perf.stop()

perf.start();
doublerInsert(smallArray)
let smallArrayInsert = perf.stop()

console.log('Results for the smallArray')
console.log("append", smallArrayAppend.preciseWords);
console.log("insert", smallArrayInsert.preciseWords);


//MEDIUM ARRAY

perf.start();
doublerAppend(mediumArray)
let mediumArrayAppend = perf.stop()

perf.start();
doublerInsert(mediumArray)
let mediumArrayInsert = perf.stop()

console.log('Results for the mediumArray')
console.log("append", mediumArrayAppend.preciseWords);
console.log("insert", mediumArrayInsert.preciseWords);


//LARGE ARRAY

perf.start();
doublerAppend(largeArray)
let largeArrayAppend = perf.stop()

perf.start();
doublerInsert(largeArray)
let largeArrayInsert = perf.stop()

console.log('Results for the largeArray')
console.log("append", largeArrayAppend.preciseWords);
console.log("insert", largeArrayInsert.preciseWords);


//TABLE

//|||||   TINY|||||SMALL|||||MEDIUM|||||LARGE|||||EXTRALARGE
//Append  7.1μs    8.4μs    51.2μs     499.3μs    3.1194ms
//Insert  4.4μs    12.3μs   158.7μs    9.0473ms   852.5962ms

//QUESTION 4


//So it seems like the larger the array gets, the longer the INSERT function (.unshift) begins to take in terms in runtime. Append definitely scales better and has much faster runtimes even with extra-large arrays. You can see that INSERT was faster with a tiny array, but extremely longer with an extra-large array


//QUESTION 5 GUESS

//I would guess that the  APPEND function using .push has a much faster time complexity O(1) because its simply adding to the end of an array. the INSERT function uses .unshift which puts it at the front of the array, and most move ALL the other elements in the array over as well. When you have an extremely large array, this becomes inefficient.

