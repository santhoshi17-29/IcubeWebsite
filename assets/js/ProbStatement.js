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
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  5: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  6: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  7: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  8: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  9: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  10: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  11: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  12: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  13: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  14: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  15: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  16: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  17: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  18: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },

  19: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  20: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  21: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  22: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  23: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  24: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  25: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  26: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  27: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  28: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  29: {
    title: "PS 4",
    description: "IoT-enabled Android application for parking space...",
  },
  30: {
    title: "PS 4",
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
