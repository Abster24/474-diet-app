function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function saveAccount() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const conditions = [];

    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        conditions.push(checkbox.value);
    });

    const accountData = {
        name: name,
        age: age,
        conditions: conditions
    };

    console.log('Saving account data:', accountData); // Debugging line
    setCookie('accountData', JSON.stringify(accountData), 7);
    //alert('Account information saved!');
    document.location.href = 'account.html';
}