var password = document.getElementById("pass")
  , confirm_password = document.getElementById("VP");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("No coincide contraseña");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;