window.addEventListener("load", (e)=>{
  const nav = document.querySelector("nav");
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click",(event)=>{
      nav.classList.toggle("nav--open");
    });

  });
});
