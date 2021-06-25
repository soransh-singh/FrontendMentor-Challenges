window.addEventListener('DOMContentLoaded', (event)=>{

  const email = document.querySelector('.input__email');
  const msg = document.querySelector('.form__warning')
  const form = document.querySelector('.form')

  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  form.addEventListener('submit', (event)=>{
    msg.innerHTML = "";
    email.classList.remove("input__email--error");

    if (email.value == null || email.value ==""){
      msg.innerHTML = "Please enter an email";
      email.classList.add("input__email--error");
    } else if(!email.value.match(mailformat))
    {
      msg.innerHTML = "Please provide a valid email address";
      email.classList.add("input__email--error");
    }

    event.preventDefault();
  });

});
