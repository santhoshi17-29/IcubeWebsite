// Define problem statement data dynamically
const problemStatements = {
  1: {
    title: "PS 1",
    description: "Switching from heavy fuel oil to a suitable fuel...",
  },
  2: {
    title: "PS 2",
    description: "Drone-based surveillance system for vessels...",
  },
  3: {
    title: "PS 3",
    description: "Removal/Reduction of stickiness in spray drying...",
  },
  4: {
    title: "PS 30",
    description: "IoT-enabled Android application for parking space...",
  },
};

// Show modal for a specific problem statement
function showModal(psNumber) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // Populate modal content dynamically
  if (problemStatements[psNumber]) {
    modalTitle.textContent = problemStatements[psNumber].title;
    modalDescription.textContent = problemStatements[psNumber].description;
  }

  modal.style.display = "flex"; // Show modal
}

// Close modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Hide modal
}
