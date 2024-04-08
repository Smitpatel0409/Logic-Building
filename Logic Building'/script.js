    let goal = 25;
    let input = [10,15,20,25,36] 
    
    // let sum = 0;
    let temp = [];
    let smallest = [];
    let output = [];
    let indx=0;
    let flag=0;
    
    for(let i = 0; i<input.length; i++){
        if(input[i] ==  goal){
            // temp[indx] = [input[i]]
            // console.log(temp);
            // flag=1;
            output = [[input[i]]]
            // console.log(output)
        }
        for(let j = 0; j<input.length; j++){
            if((input[i] + input[j]) == goal){
                temp[indx++] = [input[i], input[j]];
               

                // console.log(temp)
                smallest = temp;
            }
            // sum = 0;
        }
    }
    // if(flag=0){
        // console.log(smallest);
    // }

    // for (let i = 0; i<smallest.length; i++){
    //     let min = smallest[i][0];
    //     for(let j = 0; j<smallest[i].length; j++){
    //         if(smallest[i][j]<min){
    //             min = smallest[i][j];
    //             smallest.push(output);
    //         }
    //     }
        
    if(output.length>smallest.length){
        console.log(output)
    }
    else{
        console.log(smallest);
    }
    // }

