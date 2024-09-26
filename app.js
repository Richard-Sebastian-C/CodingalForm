//form
function validate(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const mess = document.getElementById("message");
    let message = '';
    if (email === '') {
        message = "Please enter an email";
        mess.style.color = "red";
    }
    else if (password === '') {
        message = "Password must be of 8 characters";
        mess.style.color = "red";
    }
    else if (age === '') {
        message = "Age must be between 12 - 20";
        mess.style.color = "red";
    }
    else if (schoolValue === "") {
        alert("Please enter your school.");
    }
    else {
        message = "login successful";
        mess.style.color = "green";
    }

    mess.innerText = message;
}