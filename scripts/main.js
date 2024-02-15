const menuBtn = document.querySelector("#menu-btn");
const mobileNavWrapper = document.querySelector("#mobile-nav-wrapper");


// Handling mobile menu


const handleMobileMenu = () => {
  mobileNavWrapper.classList.toggle("active");

}

menuBtn.addEventListener("click", handleMobileMenu)

// making header animation 

var header = document.querySelector(".desktop-nav-wrapper");

var prevScrollPos = window.document.pageYOffset;

// Function to handle scroll event
function handleScroll() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  prevScrollPos = currentScrollPos;
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Add scroll event listener
window.addEventListener("scroll", handleScroll);


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

