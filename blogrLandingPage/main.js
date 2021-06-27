window.addEventListener('load', (e) => {
  console.log("Window Loaded");
  const nav = document.querySelector("#nav")
  const btn = document.querySelector(".menu__btn")

  const product = document.querySelector("#product")
  const productNav = document.querySelector("#product--nav")

  const company = document.querySelector("#company")
  const companyNav = document.querySelector("#company--nav")

  const connect = document.querySelector("#connect")
  const connectNav = document.querySelector("#connect--nav")



  btn.addEventListener("click", (event)=>{
    nav.classList.toggle("nav--open")
    console.log("hello");
  })

  product.addEventListener("click", (event)=>{
    productNav.classList.toggle("nav__link--open")
  })

  company.addEventListener("click", (event)=>{
    companyNav.classList.toggle("nav__link--open")
  })

  connect.addEventListener("click", (event)=>{
    connectNav.classList.toggle("nav__link--open")
  })
});
//nav__link--open
