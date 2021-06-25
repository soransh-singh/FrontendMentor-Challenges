window.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#john").style.display ='none';
  document.querySelectorAll('button').forEach(function(button){
      button.onclick = function () {
        const john = document.querySelector("#john")
        const tanya = document.querySelector("#tanya")
        if(john.style.display === 'none'){
          john.style.display= '';
          tanya.style.display = 'none';
        }
        else {
          john.style.display= 'none';
          tanya.style.display = '';
        }
      };
  });
});
