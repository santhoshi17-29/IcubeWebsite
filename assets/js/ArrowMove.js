$(document).ready(function () {
    $('.custom-slider').slick({
        dots: false,               // No navigation dots
        arrows: true,              // Enable arrows
        infinite: true,            // Infinite looping
        speed: 800,                // Transition speed
        slidesToShow: 1,           // Show 1 slide at a time
        slidesToScroll: 1,         // Scroll 1 slide
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".cont-box1");
  
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight - 50; // Box becomes visible 50px before the viewport bottom
    }
  
    function animateBoxes() {
      boxes.forEach((box) => {
        if (isInViewport(box)) {
          box.classList.add("visible");
        }
      });
    }
  
    // Initial check on page load
    animateBoxes();
  
    // Trigger on scroll
    window.addEventListener("scroll", animateBoxes);
  });
  

  function increaseFontSizeIfPDF() {
    var rulebookLink = document.getElementById('rulebook');
    var brochureLink = document.getElementById('brochure');

    // Check if the href contains a .pdf and apply larger font size
    if (rulebookLink.href.includes('.pdf')) {
        rulebookLink.classList.add('large-font');
    }
    if (brochureLink.href.includes('.pdf')) {
        brochureLink.classList.add('large-font');
    }
}

// Call the function to adjust font sizes on page load
window.onload = increaseFontSizeIfPDF;
  
  