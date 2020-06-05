function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var email = document.forms["myForm"]["email"].value;
    var pswd = document.forms["myForm"]["password"].value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (fname.length < 1) {
        document.getElementById("fname").innerHTML = "First name cannot be empty";
        document.forms["myForm"]["fname"].classList.add("error");
    }
    if (lname.length < 1) {
        document.getElementById("lname").innerHTML = "Last name cannot be empty";
        document.forms["myForm"]["lname"].classList.add("error");
    }
    /* email id must contain the @ and . character
     There must be at least one character before and after the @.
     There must be at least two characters after . (dot)*/
    if ((email.length < 1) || (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)) {
        document.getElementById("email").innerHTML = "Looks like this is not an email";
        document.forms["myForm"]["email"].classList.add("error");
    }
    if (pswd.length < 6) {
        document.getElementById("pswd").innerHTML = "Password must be at least 6 characters long";
        document.forms["myForm"]["password"].classList.add("error");
    }
    if (fname.length < 1 || lname.length < 1 || email.length < 1 || pswd.length < 6 || (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)) {
        return false;
    } 
    else {
        alert("You are Signed Up!");
    }
}