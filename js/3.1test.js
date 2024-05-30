{

    function sumAsync(numb1,numb2,callback){
     sum = numb1 + numb2
     callback(sum)
    }
    console.log("sum is:");
    function myCallback(){
        setTimeout(() => {
            console.log(sum);
        }, 4000);
    }
    sumAsync(25,40,myCallback);
}