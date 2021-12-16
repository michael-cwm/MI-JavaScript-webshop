window.onload = function(){
  bundledHeaderFunctions()
}

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
}


