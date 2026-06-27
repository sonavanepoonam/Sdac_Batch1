class InvalidAge extends Error{
    constructor(message){
 super(message)
    this.name="InvalidAge"
    }
   
}
function validate(age){
    if(age < 18)
try{
    throw new InvalidAge("age is < 18")}
    catch(error){
        console.log(error.name+ " : "+error.message);
        
    }
   

 else{
        console.log("valid");
        
    }}
    validate(13)
    
