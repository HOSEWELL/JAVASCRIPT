{
    let x= [3, 4, 5, 4, 6, 4]

    removeDuplicate = (Array)=>{
        newArray = [];
      Array.forEach(item =>{
       if(!newArray.includes(item)){
          newArray.push(item);
       }
      });
      return newArray
    }
    console.log(removeDuplicate(x));
}
{
  let arr = [9,3,4,5,2,7]
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {     // (outer loop)=italate through each element in the array
        for (let index = 0; index < arr.length - 1; index++) {   //-1 represent the last element in the array  (inner loop)=compare adjacent & swap if in wrong order
            if (arr[index] > arr[index + 1]) {
                // Swap the elements
                 temp = arr[index];         //  (temp)-temporary store the value of element during swapping
                arr[index] = arr[index + 1];          
                arr[index + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));
}
{
    
    arr =[34,90,32,76,64]
  function bubblesort(arr){
    for(i=0; i<arr.length; ++i){
      for(j=i+1; j<arr.length; j++){
        if (arr[i] > arr[j]){

          temp = arr[i]
          arr[i]= arr[j]
          arr[j]= temp
        }
        }
      }
      return arr
  }
  console.log(bubblesort(arr))
}
// 
{
    let array = [5,8,6,8,10]
    function twoSum(array){
        sum = 16;
        for (i=0; i<array.length; i++){
            for (let j=i; j<array.length; j++){
                if (array[i] + array[j] == sum && j!=i){    // "&& array.indexOf(j) !=i"
                    return [i,j]
                }
            }
        }
    }
    console.log(twoSum(array));
}
