function merge (arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while (i<arr1.length && j<arr2.length){
        if(arr2[j] >= arr[i]){
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        results.push(arr[i]);
        i++
    }
    while(j<arr2.length){
        results.push(arr[j]);
        j++
    }



    return results;
}


function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2);

    let leftSide = mergeSort(arr.slice(0,mid));
    let rightSide = mergeSort(arr.slice(mid));
    //slice array
    merge(leftSide,rightSide);
}