const menuBtn = document.querySelector("#menu-btn");
const mobileNavWrapper = document.querySelector("#mobile-nav-wrapper");


// Handling mobile menu


const handleMobileMenu = () => {
  mobileNavWrapper.classList.toggle("active");

}

menuBtn.addEventListener("click", handleMobileMenu)



// circle active function 

var spans = document.querySelectorAll('.circle-wrap span');

// Add click event listener to each span
spans.forEach(span => {
  span.addEventListener("click", () => {

    spans.forEach(e => {
      e.classList.remove("active");
    })
    span.classList.add("active");
  })
})




