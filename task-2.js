// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function identifyNumber(number){
    if(number %2 === 1){
        let multiply = number*2;
        return multiply;
    } else{
        let result = number / 2;
        return result;
    }
}
const result= identifyNumber(19);
console.log(result);