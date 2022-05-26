var Name = document.getElementById("name");
var fathername = document.getElementById("fathername");
var email = document.getElementById("email");
var password = document.getElementById("password");
var empty = document.getElementById("erorr");
var CINC = document.getElementById("CINC");
var number = document.getElementById("Number");
function sign() {
  switch (true) {
    case Name.value === "":
      empty.innerHTML = "Enter your name";
      break;
    case fathername.value === "":
      empty.innerHTML = "Please enter your Father name";
      break;
    case email.value === "":
      empty.innerHTML = "Please enter your email";
      break;
    case password.value === "":
      empty.innerHTML = "Please enter your password";
      break;
    case CINC.value === "":
      empty.innerHTML = "Please enter your CINC no";
      break;
    case number.value === "":
      empty.innerHTML = "Please enter your number";
      break;
    default:
      console.log(Name.value);
      console.log(fathername.value);
      console.log(email.value);
      console.log(password.value);
      console.log(CINC.value);
      console.log(number.value);
      empty.style.color="yellow";
      empty.innerHTML="Sucessfully signedup";
  }
}
