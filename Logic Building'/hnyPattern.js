// let i,j,k;

// for (i = 1; i <= 5; i++) {
//     let line="";
//     for (j =1; j <= 5; j++) {
       
//         if (i == 1 ||  i == 3 || i == 5  || (i==4 && j==4)) {
//             line+="*";
//         }else{
//             line+=" "
//         }
//     }
//     console.log(line +"\n")
//     // console.log("\n");
//     // 
// }

let i, j ,k;

for (i = 1; i <= 5; i++) {
    k=1;
    for (j =1; j <= 5 && k<=5;k++, j++) {
        if (k == 1 ||  k == 3 || k == 5 || (k==4 && j==5) || (k==2 && j==1)) {
            console.log("*");
        }
        else{
            console.log(" ")
            console.log(" ")
            

        }
        
    }
    console.log("\n");

    k=1;
    for (j =1; j <= 5 && k<=5;k++, j++) {
        if (j == 1 || j == 5 || (k==4 && j==4) || (k==2 && j==2) || (k==3 && j==3)) {
            console.log("*");
        }
        else{
            console.log(" ")
            console.log(" ")
            

        }
        
    }
    console.log("\n");



    // for (i = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    
}
