function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const accountData = JSON.parse(getCookie('accountData'));
    console.log('Loaded account data:', accountData); // Debugging line

    if (accountData) {
        document.getElementById('account-name').textContent = `Name: ${accountData.name}`;
        document.getElementById('account-age').textContent = `Age: ${accountData.age}`;
        document.getElementById('account-conditions').textContent = `Conditions: ${accountData.conditions.join(', ')}`;
    }
});

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}