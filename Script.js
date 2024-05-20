var Name = document.querySelector("#name");
var ph_num = document.querySelector("#number");
var mail = document.querySelector("#email");
var pass = document.querySelector("#pass"); // corrected selector
var cpass = document.querySelector("#conf_pass");
var submit = document.querySelector("#submit");

submit.addEventListener('click', function(event) {
    event.preventDefault(); // prevent form submission to validate

    var vname = Name.value.trim();
    var vph = ph_num.value.trim();
    var vmail = mail.value.trim();
    var vpass = pass.value.trim();
    var vcpass = cpass.value.trim();

    if (!vname || !vph || !vmail || !vpass || !vcpass) {
        alert("All fields must be filled out properly.");
        return;
    }

    if (vph.length !== 10 || isNaN(vph)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    if (vpass !== vcpass) {
        alert("Passwords do not match.");
        return;
    }
    

    alert("Form filled correctly.");
    // Here you can add the code to actually submit the form if needed.
});
