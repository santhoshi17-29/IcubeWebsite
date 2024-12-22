



document.addEventListener("DOMContentLoaded", function() {
  const introElement = document.querySelector('.intro');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger the animation only if it's not currently animating
        introElement.style.animation = "none"; // Reset animation
        void introElement.offsetWidth; // Trigger reflow to restart animation
        introElement.style.animation = "typewriter 4s steps(40) forwards, blink 0.75s step-end infinite";
      }
    });
  });

  observer.observe(introElement);
});



document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.cont-box1');

  function checkVisibility() {
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      const boxBottom = box.getBoundingClientRect().bottom;

      // Check if box is in the viewport
      if (boxTop < window.innerHeight && boxBottom > 0) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  }

  // Check visibility on scroll and resize
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);

  // Initial check
  checkVisibility();
});
