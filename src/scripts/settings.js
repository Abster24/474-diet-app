    const darkModeSwitch = document.getElementById("darkmode-switch");

    // Check if dark mode is already enabled in localStorage
    if (sessionStorage.getItem("darkMode") === "enabled") {
        enableDarkMode();
        darkModeSwitch.checked = true; // Set the toggle switch to "on"
    }

    // Add event listener to the toggle switch
    darkModeSwitch.addEventListener("change", () => {
        if (darkModeSwitch.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

function enableDarkMode() {
    document.body.classList.add("dark-mode");
    sessionStorage.setItem("darkMode", "enabled"); // Save preference to localStorage
}

function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    sessionStorage.setItem("darkMode", "disabled"); // Save preference to localStorage
}

