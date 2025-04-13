
  // Get modal elements
const loginModal = document.getElementById("loginModal");
const logoutModal = document.getElementById("logoutModal");
const openLogin = document.getElementById("openLogin");
const openLogout = document.getElementById("logoutButton");
const closeLogout = document.querySelector(".closeLogout");
const closeLogin = document.querySelector(".closeLogin");

const logout = document.getElementById("logoutButton");
sessionStorage.getItem("userId") ? logout.style.display = "inline" : logout.style.display = "none";

// Show Login modal when login button is clicked
openLogin.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

//  Show Logout modal when logout button is clicked
openLogout.addEventListener("click", () => {
    logoutModal.style.display = "flex";
});

// Hide modal when close button is clicked
closeLogin.addEventListener("click", () => {
    loginModal.style.display = "none";
});

closeLogout.addEventListener("click", () => {
    logoutModal.style.display = "none";
});

// Hide modal when clicking outside of the modal
window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});

window.addEventListener("click", (event) => {
    if (event.target === logoutModal) {
        logoutModal.style.display = "none";
    }
});



