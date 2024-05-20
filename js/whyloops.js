{
let x = 0;
while(x<=10){
    console.log(x);
    x++;
}
}

{
    const arr=[89, 89, 76, 54, 346, 89]
    let x=0;

    while(x< arr.length){
        console.log(arr[x]);

        x++;
    }

    function getSum(arr){
    let x=0;
    sum=0;
    while(x< arr.length){

        sum=sum+arr[x]
        x++
    }return sum

        
    }
   console.log(getSum(arr));
}