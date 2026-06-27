const employee=[
    { name:"tom",salary:12900},
    { name:"top",salary:12700},
    { name:"tos",salary:18900},
    { name:"tod",salary:13900},
    
]
 const filtersalary= employee.filter((employee)=>{
    return employee.salary>12700
})
console.log(filtersalary);
