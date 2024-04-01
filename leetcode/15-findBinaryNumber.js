// 32 16 8 4 2 1
// 7 => 111, 8 => 1000 , 19 => 10011


function binaryNumber(num){
    let b = '';
    if(num == 0){
        b = 0
    }
    while(num>0)
    {
        let rem = num%2;
        b = rem + b;
        num = num >> 1;
    }
    console.log(b);
}

binaryNumber(2)