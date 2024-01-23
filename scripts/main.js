const menuBtn = document.querySelector("#menu-btn");
const mobileNavWrapper = document.querySelector("#mobile-nav-wrapper");


// Handling mobile menu


const handleMobileMenu = () =>{
    mobileNavWrapper.classList.toggle("active");

}

menuBtn.addEventListener("click", handleMobileMenu )
