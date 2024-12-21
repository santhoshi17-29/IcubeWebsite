document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.querySelector(".loading-screen");
    const mainContent = document.querySelector(".main-content");
  
    // Set a minimum loading time of 3 seconds
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Hide the loading panel
      mainContent.style.display = "block"; // Show the main content
    }, 3000); // 3 seconds delay
  });
  