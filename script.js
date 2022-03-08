var css = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colorDiv = document.getElementById("colorChange");

function changeColor(){
    colorDiv.style.background = "linear-gradient(to right, " +color1.value +","+color2.value +")"; 
    css.textContent = colorDiv.style.background + ";";
}
color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)