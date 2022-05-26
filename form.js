var main = document.getElementById("Main");
var heading=document.createElement("h1");
var headingText = document.createTextNode("Student login");
main.appendChild(heading);
heading.appendChild(headingText);
heading.setAttribute("class","h1");
var img=document.createElement("img");
main.appendChild(img);
img.setAttribute("src","./photo/colorlogo-01.png");
img.setAttribute("width","40%");
var div= document.createElement("div");
main.appendChild(div);
div.setAttribute("class","input");
var email=document.createElement("input");
email.setAttribute("type","email");
email.setAttribute("placeholder","Enter email address");
div.appendChild(email);
var password=document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("placeholder","Enter password");
div.appendChild(password);
var error=document.createElement("p");
main.appendChild(error);
var btn=document.createElement("button");
div.appendChild(btn);
var btnText=document.createTextNode("Login");
btn.appendChild(btnText);
btn.setAttribute("onclick","sub()")
function sub() {
  switch (true) {
    case email.value === "":
      error.innerHTML="Please enter your valid email";
      break;
    case (password.value === "" && password.value<7):
        error.innerHTML="Please enter your valid password";
      break;
    default:
      console.log("Email address : ", email.value);
        console.log("Password : ",password.value);
        error.style.color="green";
        error.innerHTML="Sucessfully login";
  }
}
