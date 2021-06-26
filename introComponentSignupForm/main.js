const form = document.querySelector(".form");
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const errFname = document.querySelector(".fname__error");
const errLname = document.querySelector(".lname__error");
const errPassword = document.querySelector(".password__error");
const errEmail = document.querySelector(".email__error");



form.addEventListener("submit", function(event){
  fname.classList.remove("error__input");
  lname.classList.remove("error__input");
  email.classList.remove("error__input");
  password.classList.remove("error__input");
  errFname.innerHTML = "";
  errLname.innerHTML = "";
  errEmail.innerHTML = "";
  errPassword.innerHTML = "";
  if(fname.value==null || fname.value==""){
    errFname.innerHTML = "first name cannot be empty";
    fname.classList.add("error__input");
  }
  if(lname.value==null || lname.value==""){
    errLname.innerHTML = "Last name cannot be empty";
    lname.classList.add("error__input");
  }

  if(email.value==null || email.value==""){
    errEmail.innerHTML = "email cannot be empty";
    email.classList.add("error__input");
  }

  if(password.value==null || password.value==""){
    errPassword.innerHTML = "Password cannot be empty";
    password.classList.add("error__input");
  }

  event.preventDefault();
});
