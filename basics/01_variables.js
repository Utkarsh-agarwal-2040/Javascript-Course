const accountId = 14453  //value can not be changed
let accountEmail = "utkarsh@gmail.com"  
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //its initial value be undefined if not defined intially

accountEmail = "harsh@gmail.com"
accountPassword = "256325"
accountCity = "delhi"

/*
Prefer not to use var because of issue in block scope 
and functional scope
*/

console.table ([accountEmail, accountId, accountCity])