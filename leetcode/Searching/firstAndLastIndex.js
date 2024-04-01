// Find First and Last Position of Element in Sorted Array

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

let nums = [5,7,7,8,8,10]
let target = 8;

function searchOcc(arr, target){
    let result = [];
    result.push(firstOcc(arr, target))
    result.push(lastOcc(arr, target))
    return result;
}

function firstOcc(arr, target){
    let s = 0;
    let e = arr.length-1;
    let mid = Math.floor((s+e)/2);
    let ans = -1;

    while(s <= e){
        if(arr[mid] === target){
            ans = mid;
            e = mid-1   
        }
        else if(target > arr[mid]){
            s = mid+1;
        }
        else if(target < arr[mid]){
            e = mid-1;
        }
        mid = Math.floor((s+e)/2);
    }
    return ans;
}

// console.log(firstOcc(nums, target));

function lastOcc(arr, target){
    let s = 0;
    let e = arr.length-1;
    let mid = Math.floor((s+e)/2);
    let ans = -1;

    while(s<=e){
        if(target === arr[mid]){
            ans = mid;
            s = mid+1
        }
        else if(target > arr[mid]){
            s = mid+1
        }
        else{
            e = mid-1
        }
        mid = Math.floor((s+e)/2);
    }
    return ans
}

// console.log(lastOcc(nums, target));

console.log(searchOcc(nums, target));



