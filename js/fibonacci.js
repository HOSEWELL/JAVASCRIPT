{
    function fibonacci(n){
        let sequence = [0, 1]
        for (let i=2; i<n; i++){
            sequence[i] = sequence[i-1] + sequence[i-2];
        }
        console.log(sequence[n]);
    }
    fibonacci(5)
}

{

    //fibonacci
    function fibonacci (n){
        if (n=0){
            return []
        }else if (n==1){
            return [0]
        }else if (n==2){
            return [0, 2]
        }else{
            fib_arr = [0, 1]
            for(i=2; i<n; i++){
                numbertobepushed = fib_arr[i-1] + fib_arr[i-2]
                fib_arr.push(numbertobepushed)
            }
        }return fib_arr
    }
    console.log(fibonacci(7));
}