function fizzbuzz(param){
    let result;
    if (param % 3 === 0 && param % 5 === 0){
        result = "Fizzbuzz"
    } else if (param % 3 === 0){
        result = "Fizz"
    } else if ( param % 5 === 0){
        result = "Buzz"
    } else {
        result = param;
    }
    return result
}


const check = fizzbuzz(7);
console.log(check); // print param = 7
const check1 = fizzbuzz(5);
console.log(check1); // print Buzz
const check2 =  fizzbuzz(9);
console.log(check2); // print Fizz
const check3 = fizzbuzz(45);
console.log(check3); // print Fizzbuzz