// fetch data
let gridElement = document.getElementById("grid")

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then((data) => {
        data.forEach((x) => {
            const ListElement = document.createElement("div");
            ListElement.innerHTML = `<div class="items">
                    <h4>Name: ${x.name}</h4>
                    <p><strong>Email: </strong> ${x.email}</p>
                    <p><strong>Comments: </strong>${x.body}</p>
                    </div>`
            gridElement.append(ListElement)
        })

    })
    .catch((err) => console.log(err));

// form validation for sign up page
const submitErrorSignUp = document.getElementById("submitErrorSignUp");
const nameSign = document.getElementById("name");
const emailSign = document.getElementById("email");
const pass = document.getElementById("pass");
const repass = document.getElementById("repass");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorPass = document.getElementById("errorPass");
const errorRepass = document.getElementById("errorRepass");

function validateName() {
    var name = nameSign.value;
    if (name === "") {
        errorName.innerHTML = "Name is Required";
        errorName.style.color = "red";
        return false;
    }else{
        errorName.innerHTML ="";
        return true;
        
    }
}

function validateEmail() {
    var email = emailSign.value;
    if (email === "") {
        errorEmail.innerHTML = "Email is required";
        errorEmail.style.color = "red";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        errorEmail.innerHTML = "Email is invalid";
        errorEmail.style.color = "red";
        return false;
    }
    else{
        errorEmail.innerHTML ="";
        return true;

    }

}

function validatePassword() {
    const password = pass.value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password === '') {
        errorPass.innerHTML = "password is required"
        errorPass.style.color = "red";
        return false;
    }
    else if (!password.match(passwordPattern)) {
        errorPass.innerHTML = 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.';
        errorPass.style.color = "red";
        return false;
    } 
    else{
        errorPass.innerHTML = "";
        return true;

    }

}

function validateCon(){
    const password = pass.value;
    const confirmPassword = repass.value;

    if (password === '') {
        errorRepass.innerHTML = "password is required"
        errorRepass.style.color = "red";
        return false;
    }
    else if (password !== confirmPassword) {
        errorRepass.innerHTML = "Passwords do not match"
        errorRepass.style.color = "red";
        return false;
    } 
    else{
        errorRepass.innerHTML = "";
        return true;

    }
}

function validateFormSign(){
    if(!validateName() || !validateEmail() || !validatePassword() || !validateCon()){
        submitErrorSignUp.style.display="block";
        submitErrorSignUp.innerHTML="Please fix the error";
        submitErrorSignUp.style.color = "red";
        setTimeout(()=>{submitErrorSignUp.style.display="none";},4000);
        return false;
    }
    else{
        const userName = emailSign.value;
        const passworsName = pass.value;
        let userdata =[{
            "username" : userName,
            "password" : passworsName
        }];
        localStorage.setItem("dataUser",JSON.stringify(userdata));
        alert("SuccessFully Signed Up. Please LogIn to proceed further");
    }
    
}

// Check validation for login Page
const loginForm = document.getElementById("loginForm")
const emailLogin = document.getElementById("emailLogin");
const passLogin = document.getElementById("passLogin");
const emailErrorLogin = document.getElementById("emailErrorLogin");
const passErrorLogin = document.getElementById("passErrorLogin");
const submitErrorLogin = document.getElementById("submitErrorLogin");

function validateEmailLogin() {
    var email = emailLogin.value;

    if (email.length == 0) {
        emailErrorLogin.innerHTML = "Email is required";
        emailErrorLogin.style.color = "red";
        return false;
    }
    else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailErrorLogin.innerHTML = "Email is invalid";
        emailErrorLogin.style.color = "red";
        return false;
    }
    else{
        emailErrorLogin.innerHTML = "";
        return true;
    }

}

function validatePasswordLogin() {
    const password = passLogin.value;

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password === '') {
        passErrorLogin.innerHTML = "password is required"
        passErrorLogin.style.color = "red";

        return false;
    }
    else if (!password.match(passwordPattern)) {
        passErrorLogin.innerHTML = 'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.';
        passErrorLogin.style.color = "red";
        return false;
    } else{
        passErrorLogin.innerHTML = "";
        return true;
    }
}

function validateFormLogin(){
    if( !validateEmailLogin() || !validatePasswordLogin()){
        submitErrorLogin.style.display="block";
        submitErrorLogin.innerHTML="Please fix the error";
        submitErrorLogin.style.color = "red";
        setTimeout(()=>{submitErrorLogin.style.display="none";},4000);
        return false;
    }
    else{
        const data = JSON.parse(localStorage.getItem("dataUser"));
        if(emailLogin.value === data[0].username && passLogin.value=== data[0].password){
            alert("LoggedIn Successfully");

        }
        else{
            submitErrorLogin.style.display="block";
            submitErrorLogin.innerHTML="Password and Email doesn't match. Please Check";
            submitErrorLogin.style.color = "red";
            setTimeout(()=>{submitErrorLogin.style.display="none";},3000);
            return false;
        }

    }
   
}


