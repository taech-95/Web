// power(2,4) // 16

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1)
}

function factorial(number){
    if(number === 0) return 1;
    return number*factorial(number-1);
}

function productOfArray(array){
    let result  = 1;
    function helper(helperInput){
        if(helperInput.length === 0){
            return 1;
        }
        result*=helperInput[0];
        helper(helperInput.slice(1));
    }
    helper(array);
    return result;
}

function recursiveRange(number){
    if(number === 0 ) return number;
    return number + recursiveRange(number-1);
}


function fib(fibNumber){
    if(fibNumber<=2) return 1;
    return fib(fibNumber) + fib(fibNumber-2);
}

function reverse(str){
    if(str.length <= 1 ) return str;
    return reverse(str.slice(1))+str[0];
}
//     
//emosewa

reverse('awesome');
let result = productOfArray([1,2,3]);