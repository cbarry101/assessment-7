function sumZero(arrayOfNumbers){
    let sortedArrayOfNumbers = arrayOfNumbers.sort((a,b) => a-b)
    if (sortedArrayOfNumbers.size = 0){
        return false
    }
    let positiveArr = []
    let negativeArr = []
    let found = false

    for (let i = 0 ; i <sortedArrayOfNumbers.length; i++){
        if (sortedArrayOfNumbers[i] > 0){
            positiveArr.push(sortedArrayOfNumbers[i])
        }
        else if (sortedArrayOfNumbers[i] < 0){
            negativeArr.push(sortedArrayOfNumbers[i])
        }
    }
    //console.log(positiveArr)  test
    //console.log(negativeArr) was testing to see what was being put in arrays
    for (let i = 0 ; i<positiveArr.length; i++){
        for (let j = 0; j < negativeArr.length; j++){
            if (positiveArr[i] + negativeArr[j] === 0 ){
                found = true
                return found
            }
        }
}
    return found
}
// console.log(sumZero([1,2,3,-2]))
// console.log(sumZero([1]))

//I believe the runtime is O(n^2)because of nested for loop. They both depend on the length of the original array passed in.

//Space-complexity: O(n^2) (unsure)

function hasUniqueChars(word){
    let newSet = new Set(word)
    if (newSet.size === word.length){
        return true
    }else{
        return false
    }
}
// console.log(hasUniqueChars('moonday'))

//Runetime complexity: O(n)
//Space complexity: O(n)

// function isPangram(sentence){
//     let chars = sentence.toLowerCase().trim().split('')
//     let charsSorted= chars.sort()
//     let charsSortedSet = new Set(charsSorted)
//     console.log(charsSorted)
//     console.log(charsSortedSet)

//     let alphabetArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//     if (charsSortedSet === alphabetArr){
//         return true
//     }
//     else{
//         return false
//     }

// }
// console.log(isPangram('The quick brown fox jumps over the lazy dog'))
//couldnt figure out how to remove spaces inbetween words. also, i dont think this would work since the arrays arent strictly equal in terms of memory. would need  to loop through them and check values and same index.

function isPangram(sentence){
    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const charsArr = sentence.split('');

    for (let i = 0; i < alphabetArr.length; i++) {
        if (charsArr.indexOf(alphabetArr[i]) < 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//Time complexity is O(n) i believe
//Space complexity O(n)

// function longestWord(words){
//     let longest = words.sort(
//         function(a,b){
//             return b.length - a.length
//         }
//     )
//     return longest[0].length
// }

// console.log(longestWord(['hi','hello']))

const longestWord = words => {
    let longestOne = words.sort((a,b) => b.length - a.length)
    console.log(longestOne)
    return longestOne[0].length
}
console.log(longestWord(['hello','december','hi','abcdefghijklmnopqrstuvwxyz']))

//Time complexity  O(n)

//Space complexity O(1)