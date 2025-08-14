const button=document.getElementById("button");
const result=document.getElementById("result");


function register(event){
    event.preventDefault();

    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        result.style.color="red";
        result.textContent="try again";
    }
    else {
        result.style.color="green";
        result.textContent="registered successfully"
    }

}

button.addEventListener("click",register)