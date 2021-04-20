const readline = require('readline-sync');
console.log("User Registration");
const validation = () =>{
    let fname = readline.question("Enter the firstname:");
    let fnameRgx = /[A-Z][a-z]*/;
    if (fnameRgx.test(fname) == true){
        console.log("Valid firstname");
    }else {
        console.log("Invalid firstname");
        return false;
    }
// UC2(lastname)

    let lname = readline.question("Enter the lastname:");
    let lnameRgx = /[A-Z]+([ '-][a-zA-Z]+)*/
    if (lnameRgx.test(lname) == true){
        console.log("Valid lastname");
    }else {
        console.log("Invalid lastname");
        return false;
    }
}
validation();