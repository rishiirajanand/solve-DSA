let arr = [2,-6,5,8,3];

function reverse(arr){
    let i = 0;
    let j = arr.length-1;
    while(i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--;
    }
    console.log(arr);
}
reverse(arr)