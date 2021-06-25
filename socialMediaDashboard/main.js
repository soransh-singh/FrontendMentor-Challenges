window.addEventListener("load",(e)=>{
  console.log("window loaded");
  const box = document.querySelector(".box");
  const btn = document.querySelector(".btn")
  box.addEventListener("click", (event)=>{
    btn.classList.toggle("btn--on");
    box.classList.toggle("box--on");
    if(btn.classList.contains("btn--on")){
      console.log("dark mode");
      document.documentElement.style.setProperty("--bg","hsl(230, 17%, 14%)");
      document.documentElement.style.setProperty("--topBg","hsl(232, 19%, 15%)");
      document.documentElement.style.setProperty("--cardBg","hsl(228, 28%, 20%)");
      document.documentElement.style.setProperty("--BText","hsl(228, 34%, 66%)");
      document.documentElement.style.setProperty("--DText","hsl(0, 0%, 100%)");
    }else{
      console.log("light mode");
      document.documentElement.style.setProperty("--bg","hsl(0, 0%, 100%)");
      document.documentElement.style.setProperty("--topBg","hsl(225, 100%, 98%)");
      document.documentElement.style.setProperty("--cardBg","hsl(227, 47%, 96%)");
      document.documentElement.style.setProperty("--BText","hsl(228, 12%, 44%)");
      document.documentElement.style.setProperty("--DText","hsl(230, 17%, 14%)");

    }
  });
});
