{
    let n=5
    let sum=0
    for (let k=0; k<=n; k++){
        sum=sum+5;
    }
console.log(sum)
}

{
    let n = 5

    let sum = 0;
    for (let k = 0; k <= n; k++ ){
        console.log("Sum before update: " + sum + ". k is currently: " + k)
        sum = sum + k;
        console.log("Sum after update: " + sum)
        console.log("\n")
    }
}
{
    function getsum(n){
        let sum=0;
        for(let k=0; k<=n; k++){
            sum = sum +k;
        }
        return sum
    }
   // console.log(getsum(5))
}

{
    function printintegerreverse(n){
        for(let i=n; i>=0; i-=2){
console.log(i)
        }
    }
    //printintegerreverse(10)
}

{
    function divisibleby5and10(n){
        for (k=0; k<=n; k++){
            if((k%5==0) && (k%10==0)){
                console.log(k)
            }
        } 
    }
    //divisibleby5and10(40)
}


{
    function powerby4(a,e){
        let prod = 1;
        for (k=1; k<=e; k++){

            prod= prod*a;
            }
            return prod;
        }
    
    console.log(powerby4(3,4))
}

{
    function getPower(a, e){
        let prod = 1;
        for(let i = 1; i <= e; i++){
            prod = prod * a;
        }
        return prod;
    }
    console.log(getPower(5, 3))
}