function find(nums, target){
    i=0
    while(i<nums.length){
        if (nums[i]==target){
            return(i)
        }else{
            i++
            answer=false;
        }
    }
    if(answer==false){
        return(-1)
    }

    
}
    
console.log(find([4,5,6,7,0,1,2], 0))