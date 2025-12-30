let int = [4,2,7,8,1,2,5]

const LinearSearch = (int)=>{
    const target = 80
    let val = -1
    for(let i = 0;i<=int.length;i++){
        if(target == int[i]) val = i 
    }

console.log(val)
return val
}

LinearSearch(int)