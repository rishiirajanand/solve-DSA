let even = [2,6,8,12,16,21]

function binarSearch(arr,target){

    let left = 0;
    let right = arr.length-1;
    let mid = Math.floor((left+right)/2)

    while(left <= right){
        if(arr[mid] === target){
            return mid;
        }
        if(arr[mid] < target){
            left = mid+1
        }
        else{
            right = mid-1
        }

        mid = Math.floor((left+right)/2)
    }
    return -1
    
}

console.log(binarSearch(even, 16));