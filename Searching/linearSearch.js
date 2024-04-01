let arr = [5,2,10,17,8,3];
const key = 8;

function linearSearch(arr){
    for(let i=0; i<arr.length; i++){
        if(key === arr[i]){
            return true
        }
    }
    return false;
}

console.log(linearSearch(arr));