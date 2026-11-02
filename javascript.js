
function registerStudent() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please enter all details");
    }
    else {
        document.getElementById("result").innerHTML =
            "Registration Successful! Welcome " + name;
    }
}
