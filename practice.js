
let newarr=[]
function doubleit(array){
    for(let i=0;i<array.length;i++){
        if(array[i]%6==0){
            newarr[i]=array[i]*3;
            
        }else {
            newarr[i]=array[i]*2;
        }
        
        
    }
    return(newarr)
}
console.log(doubleit([1,2,3,4,5,6,5,60, 5]))


function convertIntoSeconds(hours, minutes){
    let hour = hours * 60 *60
    let minute = minutes*60
    return(hour+minute)
}
console.log(convertIntoSeconds(1, 60))

function odds(array){
    
    return(filter(array))
}
function filter(array){
    let newArr=[]
    let b = 0;
    for (let i=0; i< array.length;i++){
        if(array[i]%2!=0){
            newArr[b]=array[i];
            b++
        }
    }
    return(newArr)
}
console.log(odds([1,2,3,4,5,6]))

function numberArray(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        newArray[i]=(arr[i].length)
    }
    return(newArray)
}
console.log(numberArray(["dogs","pets","house"]))

var student = {
    name : 'David Rayy',
    sclass : 'VI',
    rollno : 12 
}

function deleteRolno(obj){
    console.log(obj);
    delete obj.rollno
    console.log(obj)
}
deleteRolno(student)



// *
// **
// ***
// ****
// *****

function stars(){
    let count =""
    for (let j=0; j<=4;j++){
        count +="*";
        for (let i=0; i<j;i++){  
            console.log(count)
        }
    }
}
stars()






//Problem: Write a function to reverse a string.
// let string = "dog";
// let newstring ="";
// function reverse (string){
//     newstring = string.reverse()


//     return(newstring)
// }
// console.log(reverse(string))



// Example : range(2, 9)
// exclude : multiples of 3
// Expected Output :[3, 4, 5, 6, 7, 8]
//[4,5,7,8]
//lets double each number of the array
//[8,10,14,16]

// function range(x,y){
//     let arr = [];
//     let double = 0;
//     for(let i = x+1; i<y; i++){
        
//             arr.push(i)
        
//     }
    
    
//     return(arr)
// }
// console.log(range(2,9))

// Sample Data: dog
// Expected Output: [“d”, “do”, “dog”, “o”, “og”, “g”]

// dog 'd' 'o' 'g' 'do' 'dg' 'og' 'dog'
// [d,o,g]
// 
let string = "dog"
let arr = []
function word(string){

    for(i=0; i<string.length;i++){
        
        arr.push(string[i])
       
        if (i<string.length-1){
            
            arr.push(string[i]+string[i+1])
        }else{
            arr.push(string)
            }
        
        // arr.push(string[i]+string[i+1]+string[i+2])
       
    }
    return(arr)
}
console.log(word(string))


var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

   function sort(library){

    let newlibrary = library.sort((a,b)=>a.libraryID-b.libraryID)
    return(newlibrary)

   }
   console.log(sort(library))