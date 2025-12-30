let values = [5,15,22,1,-15,24]

const Fun=(values)=>{
    
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY
    
    let indx = 0
    for(let i = 0;i<=values.length;i++){
        if(values[i]<min){
            min=values[i]
            indx = i
        }
        if(values[i]>max){
            max=values[i]
        }
        
    }
    console.log(min,indx)
    
    
}


Fun(values)
