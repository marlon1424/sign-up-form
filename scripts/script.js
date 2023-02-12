const password = document.querySelector("#pwd");
const confirm_password = document.querySelector("#c_pwd");
const perror = document.querySelector(".error");

function validatePassword(){
    if(password.value != confirm_password.value) {
        password.setAttribute('style', 'border: 1px solid red');
        confirm_password.setAttribute('style', 'border: 1px solid red');
        perror.textContent = "*Passwords do not match";
    } else {
        password.setAttribute('style', 'border: 1px solid #E5E7Eb');
        confirm_password.setAttribute('style', 'border: 1px solid #E5E7Eb');
        perror.textContent = "";
        perror.className = "error";
    }
}

password.addEventListener('input', validatePassword);
confirm_password.addEventListener('input', validatePassword);