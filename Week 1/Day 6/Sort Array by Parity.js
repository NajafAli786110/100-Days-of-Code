var sortArrayByParity = function(nums) {
    if(nums.length <=1) return nums;
    let indexOfLeft = 0;
    let indexOfRight = 0;
    let left = [];
    let right = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0){
            left[indexOfLeft++] = nums[i];
        }
        else right[indexOfRight++] = nums[i];
    }
    nums = left.concat(right);

    return nums;
};


var sortArrayByParity = function(nums) {
    return [...nums.filter(nums=>nums%2==0), ...nums.filter(nums=>nums%2 != 0)];
};