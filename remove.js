var text=document.getElementById("text");
var out=document.getElementById("out");
var button=document.getElementById("button");
// var button=document.createElement("button");
// var div=document.getElementById("out1");
function done(){
    if(text.value==""){
        alert("Please enter some text");
    }
    else{
      out.innerHTML=text.value;
    //   div.appendChild(button);
    }
}
function remove(){
    out.style.display="none";
    button.style.display="none";
}