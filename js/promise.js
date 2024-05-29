// let myPromise = new Promise(function(myResolve, myReject){
//   //do stuff.
//     myResolve()
//     myReject()
// })


{
    let myPromise = new Promise(function(myResolve, myReject){
        let x=5;

        if(x==0){
            myResolve("Ok")
        }else{
            myReject("Error")
        }
    })
    myPromise.then(
        function(value){console.log(value);},
        function(error){console.log(error);},
    )
}