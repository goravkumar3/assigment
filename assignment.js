var Even=[];
for (var i = 1; i<=100;i++){
    if(i%2==0){
        Even.push(i);
    }
}
console.log(Even);
var odd=[];
for (var i = 1; i<=100;i++){
    if(i%2!=0){
        odd.push(i);
    }
}
console.log(odd);
var even_num=even(num);
function even(array){
    var Array=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0){
            Array.push(array[i]);
        }
    }
    console.log(Array);
}
var num=[12,32,34,89,90];
function Odd(array){
    var Array=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            Array.push(array[i]);
        }
    }
    return Array;
}
var num1=[13,32,34,49,91,44];
var odd_num=Odd(num1);
console.log(odd_num);
var country=prompt("Enter your country name: ");
var state=prompt("Enter your state name: ");
var city=prompt("Enter your city name: ");
country=country.toLowerCase();
state=state.toLowerCase();
city=city.toLowerCase();
if(country=="pakistan"){
    if((state=="sindh"||state=="punjab")&&(city=="mithi"||city=="lohare")){
        alert("You are allowed");
    }
    else{
        alert("You are not allowed");
    }

}
else{
    alert("You are not allowed");
}
