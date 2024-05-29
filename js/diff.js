{
    const arr= [30, 50, 80, 95, 65, 10]

    function getmaxnumb(arr){
        let maxnumb = arr[0]
        for(i=0; i<arr.length; i++){
            if(arr[i] > maxnumb){
              maxnumb = arr[i]
            }
        }
        return maxnumb;
    }
    console.log(getmaxnumb(arr));

    function getminnumb(arr){
        let minnumb = arr[0]
        for(i=0; i<arr.length; i++){
            if(arr[i] < minnumb){
              minnumb = arr[i]
            }
        }
        return minnumb;
    }
    console.log(getminnumb(arr));


    function getdiff(arr){
        
        if(arr.length == 0){
            return 0
        }
        let difference = (getmaxnumb(arr))-(getminnumb(arr))
        return difference
    }
    console.log(getdiff(arr));
}