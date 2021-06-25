//event.preventDefault();

window.addEventListener('load', (event) => {
  const formOne = document.querySelector("#form__one");
  const formTwo = document.querySelector("#form__two");

  const emailOne = document.querySelector(".email__one");
  const emailTwo = document.querySelector(".email__two");

  const errOne = document.querySelector(".err__one");
  const errTwo = document.querySelector(".err__two");

  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  formOne.addEventListener("submit", function(event) {
    errOne.innerHTML = "";
    errTwo.innerHTML = "";
    emailOne.classList.remove("email__one--error");
    if(emailOne.value==null || emailOne.value==""){
      errOne.innerHTML = "PLease enter an email";
      emailOne.classList.add("email__one--error");
    }else if(!emailOne.value.match(mailformat))
    {
      errOne.innerHTML = "PLease check your email";
      emailOne.classList.add("email__one--error");
    }


    event.preventDefault();
  });

  formTwo.addEventListener("submit", function(event) {
    errOne.innerHTML = "";
    errTwo.innerHTML = "";
    emailOne.classList.remove("email__one--error");
    if(emailTwo.value==null || emailOne.value==""){
      errTwo.innerHTML = "PLease enter a mail";
    }else if(!emailTwo.value.match(mailformat))
    {
      errTwo.innerHTML = "PLease check your email";
    }


    event.preventDefault();
  });


});
