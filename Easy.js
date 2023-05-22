
let total = null;
function mean(Input){
    for(i=0;i<Input.length;i++){
        total +=Input[i]
    }
    return(total/Input.length)
}
console.log(mean([1 , 4 , 7]))