const accountID = 14436
var accountEmail = "Akanksha@google.com"
let accountPassword = "12345"
accountCity = "Varanasi"

//accountID = 2//not allowed
 accountEmail = "Rahul@google.com"
 accountPassword = "262626"
accountCity = "Delhi"

console.log(accountID);
/*
Prefer not to use  var
because of issue in block scope and fucntional scope
*/
console.table([accountID,accountEmail,accountPassword,accountCity])
