let array = [1,2,4,5]; 
let missingNum = 0;
let count = 1;

for (let i = 0; i < array.length; i++) {
    if (count == array[i]) {
        // console.log(count);
        count++;
    }
    else{
        missingNum = count;
        // count++;
        // count = array[i+1]
    }
    
}
console.log(missingNum)