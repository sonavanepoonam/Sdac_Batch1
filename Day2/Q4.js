//true condition
function payment(status){
}

async function test(){
    const data=await payment(true)
    if(data){
        console.log(data);

        
    }else{
        console.log(Error);
        
    }
}
test();

//false condition
 async function test(){
    try {
      const data=await payment()
    if(data){  

        console.log(data);
    }
    } catch (error) {
        console.log(error);
        
    }
 }
 test();