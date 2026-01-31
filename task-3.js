// Write a function called make_avg()
// which will take an array of integers and
// the size of that array and return the average of those values.

function make_avg(array, size) {
  let sum = 0;
  for (element in array){
    sum += array[element];
    // console.log(sum);
  }
  return sum / size;;
}
// const result =make_avg([2, 4, 6, 8], 4);
// console.log(result);

// 
// by arrow function
// 
const make_avg2 = (arr, size) => {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size;
};
// const result =make_avg2([6, 10, 8, 9, 10, 80], 6);
// console.log(result);


// 
// BY  .reduce array Methods
// 
const make_avg3 = (arr, size) =>
  arr.reduce((sum, value) => sum + value, 0) / size;

const result =make_avg3([6, 10, 8, 9, 10, 80, 20, 90], 2);
console.log(result);