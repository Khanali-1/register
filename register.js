const form = document.getElementById("form");
const result = document.getElementById("result");

function Register(event){
    event.preventDefault();

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword){
        result.style.color = "red";
        result.textContent = "try again!";
    }
    else {
        result.style.color = "green";
        result.textContent = "registration Successful";
        this.reset();/* if u want to refresh after clicking on register button */
    }

}
form.addEventListener("submit",Register)