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

// UC3 (Email)
    let Email = readline.question("Enter the Email:");
    let EmailRgx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (EmailRgx.test(Email) == true){
        console.log("Valid Email");
    }else {
        console.log("Invalid Email");
        return false;
    }
// UC4 (mobilenumber)
    let MobileNumber = readline.question("Enter the MobileNumber:");
    let MobileNumberRgx =/^[1-9]{1}[0-9]{9}$/;
    if (MobileNumberRgx.test(MobileNumber) == true){
        console.log("Valid MobileNumber");
    }else {
        console.log("Invalid MobileNumber");
        return false;
    }
// UC5 (Password)
    let password = readline.question("Enter the password:");
    let passwordRgx =/^[A-Za-z0-9]{8,}/;
    if (passwordRgx.test(password) == true){
        console.log("Valid password");
    }else {
        console.log("Invalid password");
        return false;
    }
//UC6 
    let password2 = readline.question("Enter the password:");
    let password2Rgx =/^[A-Za-z0-9]{8,}/;
    if (password2Rgx.test(password2) == true){
        console.log("Valid password");
    }else {
        console.log("Invalid password");
        return false;
    }

//UC7 
    let password3 = readline.question("Enter the password:");
    let password3Rgx =/^[A-Za-z0-9]{8,}/;
    if (password3Rgx.test(password3) == true){
        console.log("Valid password");
    }else {
        console.log("Invalid password");
        return false;
    }
//UC8 
    let password4 = readline.question("Enter the password:");
    let password4Rgx =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (password4Rgx.test(password4) == true){
        console.log("Valid password");
    }else {
        console.log("Invalid password");
        return false;
    }
    
}

validation();