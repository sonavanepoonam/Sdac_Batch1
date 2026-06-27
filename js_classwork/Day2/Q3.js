function payment(status){
return new Promise((resolve,reject)=>{
if(status){
    resolve("Payment successful")
}
else{
    reject("Error")
}
})

}
payment().then((r) => {
    console.log(r);
    
}).catch((err) => {
    console.log(err);
    
});

//async await

async function test(){
    const data=await payment(true)
    if(data){
        console.log(data);

        
    }else{
        console.log(Error);
        
    }
}
test();