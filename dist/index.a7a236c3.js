window.onload = function() {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', ()=>{
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });
};
function burgerToggle() {
    let element = document.getElementById("burgerDropdown");
    element.classList.toggle("burgerStyle");
}

//# sourceMappingURL=index.a7a236c3.js.map
