//rest
const c=[10,4,5,6]
function findMax(){
    return Math.max(...c)
}
console.log(findMax());

//default
function add(a,b=10){
    console.log(a+b);
    
}
add(10,30)