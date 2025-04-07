
const ham = document.getElementById("ham");
const close = document.getElementById("close");

ham.addEventListener("click", w3_open);
close.addEventListener("click", w3_close);

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
