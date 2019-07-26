// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%
checkingDiscount= (name,registered)=>{
    let discount=(registered)?(5):(4);
    return `${name} is having ${discount}% discount`;
}
 
console.log(checkingDiscount('dhruv',true));
console.log(checkingDiscount('raj',false));