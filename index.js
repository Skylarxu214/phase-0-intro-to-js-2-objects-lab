// Write your solution in this file!
const employee ={name:"Sam", streetAddress:"11 Broadway"};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj= {...employee};
    newObj[key] = value;
    return newObj;
   
}
console.log(updateEmployeeWithKeyAndValue(employee,"key","11 Broadway"));


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  
    employee[key] = value;
    return employee;

}


function deleteFromEmployeeByKey(employee, key){
    const  newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee ,key){
    delete employee[key];
    return employee;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));