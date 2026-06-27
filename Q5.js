const arr=[3,5,8]
const s=arr.map((arr)=>{
    return arr**2;
})
console.log(s);
const e= arr.filter((arr)=>{
    return arr%2==0;
})
console.log(e);
const sum=arr.reduce((total,arr)=>{
    return total= total+arr;
})
console.log(sum);

