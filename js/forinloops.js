// for in
{
    const numbers=[56, 78, 89, 90]


    function getSum(arr){
        sum=0;
        for(let i in arr){
            sum=sum+arr[i]
        }
        return sum;
    }
    console.log(getSum(numbers));

    //for of
    function getSum(arr){
        sum=0;
        for(let i of arr){
            sum=sum+[i]
        }
        return sum;
    }
    console.log(getSum(numbers));

    //max number using of

   function maxvalueinarr(arr){
    let currentgreatest = numbers[0]
        for (let i of arr){
            if( i > currentgreatest){
                currentgreatest = i ;
            }
        }
        return currentgreatest;
}
console.log(maxvalueinarr(numbers));

//max number using in

function maxvalueinarray(arr){
    let currentgreatest = numbers[0]
    for (let i in arr){
        if(numbers[i] > currentgreatest){
            currentgreatest = numbers[i];
        }
    }
    return currentgreatest;
}
console.log(maxvalueinarray(numbers));

// min number using of
function minvalueinarr(arr){
    let currentgreatest = numbers[0]
        for (let i of arr){
            if( i < currentgreatest){
                currentgreatest = i ;
            }
        }
        return currentgreatest;
}
console.log(minvalueinarr(numbers));

}