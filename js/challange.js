let nums = [1, 3, 5, 8];
target = 4;

let searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target == nums[i]) {
            return i;
        }else if (target < nums[i]){
            return i; 
        }else if(i === nums.length -1 ){
            return i + 1
        }
    }
};
console.log(searchInsert(nums, target));