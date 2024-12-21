function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active'); // Toggle 'active' class to show/hide menu
}



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