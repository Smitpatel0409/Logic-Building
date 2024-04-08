let arr = [1,2,3,2,1,2];
let obj = [];
let max = 1;
let rep = 0;

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {      
        if (arr[i] == arr[j]) {
            obj[count++] = arr[i] 
        }
    }
    // console.log(obj)
    
//   console.log(obj.length)
    if (rep < obj.length) {
        rep = obj.length;
        max = arr[i];
    }
    obj=[];
}
console.log(max);