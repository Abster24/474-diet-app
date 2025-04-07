
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  // Get modal elements
const modal = document.getElementById("loginModal");
const openPopup = document.getElementById("openPopup");
const closePopup = document.querySelector(".close");

// Show modal when login button is clicked
openPopup.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Hide modal when close button is clicked
closePopup.addEventListener("click", () => {
    modal.style.display = "none";
});

// Hide modal when clicking outside of the modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


