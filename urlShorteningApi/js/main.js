window.addEventListener("load", ()=>{
  console.log("window Loaded");

  const form = document.querySelector(".form")
  console.log(form);
  form.addEventListener("submit", (event)=>{
    console.log("form submmited");
    event.preventDefault()
  })
  
})
