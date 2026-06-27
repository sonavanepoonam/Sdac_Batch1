const employee=[
    { name:"tom",salary:12900},
    { name:"top",salary:12700},
    { name:"tos",salary:18900},
    { name:"tod",salary:13900},
    
]
 const a= employee.reduce((total,employee)=>
 total= total+employee.salary,0
);
console.log(a);