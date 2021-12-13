window.onload = function(){}
    
    
    
    



    export function bundledHeaderFunctions(){

    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
    });

    let xyz = document.getElementById('hamburgare');
    
    xyz.addEventListener("click", burgerToggle);
    
    function burgerToggle(){
      let element:HTMLDivElement = document.getElementById("burgerDropdown") as HTMLDivElement;
      element.classList.toggle("burgerStyle");
    }

    document.getElementById("homeButton").addEventListener("click", () => {
      window.location.href = "index.html";
    });

    document.getElementById("aboutButton").addEventListener("click", () => {
      window.location.href = "#about";
    });

    document.getElementById("contactButton").addEventListener("click", () => {
      window.location.href = "#contact";
    });

}


