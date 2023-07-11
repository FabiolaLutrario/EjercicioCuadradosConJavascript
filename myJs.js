var botonHorizontal = document.getElementById("botonHorizontal");
var botonVertical = document.getElementById("botonVertical");

var cuadrados = document.getElementById("cuadrados");

botonHorizontal.addEventListener("click",function(){
    cuadrados.classList.remove("vertical");
    cuadrados.classList.add("horizontal");
});

botonVertical.addEventListener("click",function(){
    cuadrados.classList.remove("horizontal");
    cuadrados.classList.add("vertical");
});