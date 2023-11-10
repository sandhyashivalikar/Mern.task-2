document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerBtn");
    registerButton.addEventListener("click", register);

    function register() {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const passwd = document.getElementById("passwd").value;
        const repass = document.getElementById("repass").value;
        const genM = document.getElementById("genM");
        const genF = document.getElementById("genF");
        const age = document.getElementById("age").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;
        const eng = document.getElementById("eng");
        const kan = document.getElementById("kan");
        const hindi = document.getElementById("hindi");
        const tel = document.getElementById("tel");
        const declare = document.getElementById("declare");
        const error = document.getElementById("error");

        // Validation and data retrieval logic
        // ...

        // Example:
        if (passwd == "") {
            error.textContent = "Please enter a password";
        } else {
            error.textContent = ""; // Clear error message
            console.log(fname, lname, email, passwd);
            if (genM.checked) {
                console.log(genM.value);
            } else if (genF.checked) {
                console.log(genF.value);
            } else {
                error.textContent = "Please select a gender";
            }
            console.log(age, phone, address, state, country);
            // Handle language checkboxes and declaration checkbox
        }
    }
});
