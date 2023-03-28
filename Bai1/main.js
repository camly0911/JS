function submit() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var job = document.getElementById('job').value;
    var accept = document.getElementById('accept').checked;
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var sex;
    if (!male.checked && !female.checked) {
        sex = "Female";
    } else {
        if (!male.checked) {
            sex = "Female";
        } else {
            sex = "Male";
        }
    }
    checkName(name);
    checkPassword(password);
    checkEmail(email);
    checkJob(job);
    checkAccept(accept);
    if (checkName(name) && checkPassword(password) && checkEmail(email) && checkJob(job) && checkAccept(accept)) {
        alert(
            "name: " + name + ", " +
            "\npassword: " + password + ", " +
            "\nemail: " + email + ", " +
            "\nsex: " + sex + ", " +
            "\njob: " + job
        );
    }
}

function checkName(name) {
    if (name === '') {
        document.getElementById('name_error').innerHTML = "Name must be filled out";
        return false;
    } else {
        document.getElementById('name_error').innerHTML = "";
        return true;
    }
}

function checkPassword(password) {
    var pattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,25}'
    if (password === '') {
        document.getElementById('password_error').innerHTML = "Password must be filled out";
        return false;
    } else {
        if (!password.match(pattern)) {
            document.getElementById('password_error').innerHTML = "Password between 8 to 25 characters which contain at least one numeric digit , a special character , one uppercase";
            return false;
        } else {
            document.getElementById('password_error').innerHTML = "";
            return true;
        }
    }
}

function checkEmail(email) {
    var pattern = '^[a-zA-Z0-9](\.?[a-z0-9]){5,}@runsystem.net';
    if (email === '') {
        document.getElementById('email_error').innerHTML = "Email must be filled out";
        return false;
    } else {
        if (!email.match(pattern)) {
            document.getElementById('email_error').innerHTML = "Email must have at least 1 number and ...@runsystem";
            return false;
        } else {
            document.getElementById('email_error').innerHTML = "";
            return true;
        }
    }
}

function checkJob(job) {
    if (job === '') {
        document.getElementById('job_error').innerHTML = "Please choose your job";
        return false;
    } else {
        document.getElementById('job_error').innerHTML = "";
        return true;
    }
}

function checkAccept(accept) {
    if (accept == false) {
        document.getElementById('accept_error').innerHTML = "You must agree";
        return false;
    } else {
        document.getElementById('accept_error').innerHTML = "";
        return true;
    }
}