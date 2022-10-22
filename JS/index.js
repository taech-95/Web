function sameFrequency(firstNumber, secondNumber){
    let firstStr = firstNumber.toString();
    let secondStr = secondNumber.toString();


    if(firstStr.length != secondStr.length){
        return false;
    }

    let frequency1 = {};
    let frequency2 = {};

    for(let number of firstStr){
        frequency1[number] = (frequency1[number]||0)+1;
    }
    for(let number of secondStr){
        frequency2[number] = (frequency2[number]||0)+1;
    }

    for (let number in frequency1){
        if(!(number in frequency2)){
            return false;
        }
        if(frequency2[number]!==frequency1[number]){
            return false;            
        }
    }
    
    return true;
}

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

function areThereDuplicates(...arr){
    arr.sort();
    let i = 0;
    let j = 1;
    let areThereDuplicates = false;

    if(arr.length === 0 ){
        areThereDuplicates = false;
        return areThereDuplicates;
    }

    while(j<arr.length){
        if(arr[i]===arr[j]){
            j++;
            areThereDuplicates = true;
            return areThereDuplicates
        }
        else{
            i++;
            j++;
        }

    }
    return areThereDuplicates;
}

function averagePair(arr, average){
    arr.sort();
    let i = 0;
    let j = arr.length -1;
    if(arr.length === 0){
        return false;
    }

    while(j>i){
        let sum = (arr[i] + arr [j])/2;
        if(sum === average){
            return true;
        }
        else if (sum>average){
            j--;
        }
        else{
            i++;
        }
        
    }
    return false;
}

function isSubsequence(str1,str2){
    let i = 0;
    let j = 0;

    if(!str1){
        return true;
    }
    while(j<str2.length){
        if(str1[i] === str2[j]){
            i++;
        }
        if (i === str1.length){
            return true;
        }
        j++;
    }
    return false;
}

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

  function minSubArrayLen(arr, number){
    let sum = 0;
    let start = 0;
    let end = 0;
    let minLenght = Number.MAX_VALUE;
    //[0,5,2,3,4,5],6
    while(start<arr.length){
        if(sum<number && end < arr.length){
            sum += arr[end];
            end++;
        }
        else if(sum>=number){
            minLenght = Math.min(minLenght, end-start);
            sum -= arr[start];
            start++;
        }
        else{
            break;
        }
    }

    return minLenght === Number.MAX_VALUE ? 0 : minLenght;

  }

  function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

  function findLongestSubstring(str){
    let start = 0;
    let end = 1;
    let substringLength = 0;

    if(str.length === 0){
        return 0;
    }
    while(end < str.length){
       
        if(str[start] !== str[end]){
            console.log(str[start]);
            console.log(str[end]);
            substringLength = Math.max(substringLength, end-start);
            end++;
        }
        else if(str[start] === str [end]){
            start = end;
            end++;
        }
        else {
            break;
        }
    } 

    return substringLength;
  }

  findLongestSubstring('rithmschool');