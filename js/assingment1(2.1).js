{

    function isPalindrome(str){
        let d = str.length -1
        for(let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[d]) {
                return false;
            }
            d--;
        }
        return true;
    }
let str1 = "sis";
let str2 = "nitin";
let str3 = "nathan";
 console.log(isPalindrome (str1));
 console.log(isPalindrome(str2));
 console.log(isPalindrome(str3));
}



function drawTriangle(height) {
    for(let i = 1; i <= height; i++) {
        let row = "";
        for(let j = 1; j <= i; j++){
            row +=j;
        }
        console.log(row);
    }
}

drawTriangle(10);

{

    let arrays = [[8, 9, 4, 56, 78], [67, 89, 98], [56, 45, 32, 45], [45, 67, 80]];

    function sumOfArrays(arrays) {
        let result = [];
        let totalSum = 0;
    
        arrays.forEach(innerArray => {
            let sum = innerArray.reduce((acc, curr) => acc + curr, 0);
            result.push(sum);
            totalSum += sum;
        });
        
        console.log("Total sum:", totalSum);
    return result;
}
console.log(sumOfArrays(arrays));
}

{
    // array of arrays
    const sample_array = [[89, 56, 43], [32, 77, 56, 43], [90, 43, 49, 23, 90]]
    function getSumOfElements(arr){
        arr_sum = []
        arr.forEach((innerArr) => {
            let sum = 0
            //for the inner array
            innerArr.forEach((value) =>{
                sum = sum + value
            })
            arr_sum.push(sum)
        });
        return arr_sum
    }
    console.log(getSumOfElements(sample_array))
}

