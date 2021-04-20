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
}
validation();