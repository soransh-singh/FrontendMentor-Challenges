window.addEventListener('DOMContentLoaded', (e)=>{
  const s = document.querySelector(".switch");
  const monthly = Array.from(document.querySelectorAll(".monthly"));
  const annually = Array.from(document.querySelectorAll(".annually"));
  s.onclick = ()=>{
    s.classList.toggle("on");
    s.classList.toggle("off");
    monthly.forEach((i) => {
      i.classList.toggle("hide");
    });
    annually.forEach((i) => {
      i.classList.toggle("hide");
    });
  }
})
