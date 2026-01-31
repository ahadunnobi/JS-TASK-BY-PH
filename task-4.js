// Write a function called count_zero() which will take a binary string 
// (Binary string is a string which is consist of only 0 and 1) 
// as parameter and count how many 0’s are there in that string.
 function count_zero(binaryString ) {
    let count = 0;
    for(let bit of binaryString){
        if (bit === "0"){
            count++;
        }
    }
    return count;
 }


// const result = count_zero("10100101000100100");
// console.log(result);

// 
// modern version
// 
const countZero = str => str.split('').filter(ch => ch === '0').length;
// const result = countZero("10100101000100100000010010101010");
// console.log(result);


const countXero = str => [...str].reduce((count, ch) => ch === '0' ? count + 1 : count, 0);
const result = countXero("10100101000");
console.log(result);