const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    // emailError.innerText="";
    // passwordError.innerText="";

    //adding regx for mail and pass
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    let emailAns = emailRegex.test(email.value);
    let passAns = passwordRegex.test(password.value);

    let isValid=true;

    if(!emailAns){
        document.querySelector("#emailError").textContent = "Email is incorrect."
        isValid = false;
    }

    if (!passAns) {
        document.querySelector("#passwordError").textContent = "Password is incorrect."
        isValid = false;
    }

    if(isValid){
        document.querySelector("#successMessage").style.display = "initial";
    }
    console.log(isValid);
    
});
