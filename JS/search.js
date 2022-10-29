function linearSearch(arr, number){
    // add whatever parameters you deem necessary - good luck!
    for (let i in arr) {
        if(arr[i] === number){
            return Number(i);
        } 
    }
    return -1;
  }

  linearSearch([5,2,3,4,5],3);

  function binarySearch(sortedArr, number){
    let leftPoint = 0;
    let rightPoint = sortedArr.length;
    while ( leftPoint < rightPoint-1) {
        let result = Math.floor((rightPoint+leftPoint)/2)
        if(sortedArr[result]===number) {
            return result;
        }
        else if(sortedArr[result]>number){
            rightPoint = result;
        }
        
        else leftPoint = result;
        
    }
    return -1;
  }

  binarySearch([1,2,3,4,5],6) 
  binarySearch([1,2,3,4,5,6,7,8,9,10],9)
  binarySearch([1,2,3,4,5],2)

  function naiveSearch(long, short){
    let count = 0;
    for(let i = 0; i <long.length; i++){
        for(let j = 0; j<short.length; j++){
            if(short[j]!== long[j+i]){
                break;
            }
            if(j === short.length - 1){
                count++;
            }
            
        }
    }
    return count;
  }

  naiveSearch("lorie loled","lol")