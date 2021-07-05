window.addEventListener("load", ()=>{
  console.log("window loaded");
  const menuBtn = document.querySelector(".menu__btn")
  const nav = document.querySelector(".nav")
  menuBtn.addEventListener("click", ()=>{
    nav.classList.toggle("nav--open")
    if(nav.classList.contains("nav--open")){
      menuBtn.src="./images/icon-close.svg"
    }else{
      menuBtn.src="./images/icon-hamburger.svg"
    }
  })
})
