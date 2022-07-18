
//frequencyCounter pattern
function validAnagram (str1, str2) {
    if(str1.length!== str2.length){
        return false;
    }
    let counter1 = {};
    let counter2 = {};

    for (let val of str1){
        counter1[val] = (counter1[val] || 0) +1
    }
    for (let val of str2){
        counter2[val] = (counter2[val] || 0) +1
    }

    console.log(counter1);
    console.log(counter2);

    for (let char in counter1){
        if(!(char in counter2)){
            return false;
        }
        if(counter2[char]!==counter1[char]){
            return false;            
        }
    }
    return true;
} 

function validAnagram2(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }

  function sumZero(arr){
    let left = 0;
    let right = ar.length -1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return arr[left], arr[right];
        }
        else if(sum>0){
            right--;
        }
        else {
            left++;
        }
    }
  }
  //[1,1,1,1,2];
  function countUniqueValues(arr){
    let i = 0;
    let j = 0;
    let uniqueValues = 1;
   
    if(arr.length === 0){
        uniqueValues =0;
        return uniqueValues;
    }
    
    while (j<arr.length){
        
        if(arr[i]===arr[j]){
            j++;
        }
        else {
            i++;
            arr[i]=arr[j];
            uniqueValues++;
        }
    }
    return(uniqueValues);
}
function countUniqueValues2(arr){
    if(arr.length === 0){  
        return 0;
    }
    let i =0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;

}


function maxSubarraySum(arr, num){
    let maxSum =0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for (let index = 0; index < num; index++) {
        maxSum += arr[i];
    }
    tempSum = maxSum
    for (let index = num; index < arr.length; index++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

function search (array, value){
    let min =0;
    let max = arr.length -1;
    while(min<=max){
        let middle = Math.floor((min+max)/2);
        let curentElement = array[middle];
        if(curentElement <value){
            min = middle +1;
        }
        else if (curentElement > value){
            max = middle -1;
        }
        else {
            return middle;
        }
    }
    return -1;
}