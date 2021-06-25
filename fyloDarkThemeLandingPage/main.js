window.addEventListener("load",(e) =>{

  const form = document.querySelector("form");
  const email = document.querySelector(".email");
  const msg = document.querySelector(".error__msg");

  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  form.addEventListener("submit",event =>{

    console.log("form submitted");
    msg.innerHTML = "";
    if(email.value==null || email.value==""){
      msg.innerHTML = "PLease enter a valid email address";
    }else if(!email.value.match(mailformat))
    {
      msg.innerHTML = "PLease enter a valid email address";
    }

    event.preventDefault();
  });

});
