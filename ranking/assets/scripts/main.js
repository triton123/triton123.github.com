
//alert("Listo para ver el ranking de las mejores cerveza");
//console.log("Hola Mundo");
//DOM (document objet model)

//let element =  document.querySelector(".fas fa-beer");
//Objetos dentro del DOM se coonocen com nodos

 let elementList =  document.querySelectorAll(".fa-star");

elementList.forEach(function(element){
    element.addEventListener('click',function(){
        alert("Estrella clikeada");
        element.classList.remove("far");
        element.classList.add("fas");
    })
}); 

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");
close.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefaulf();
        content.classList.remove("animated");
        content.classList.remove("bounceInRight");
        content.classList.add("animated");
        content.classList.remove("bounceOutRight");
        setTimeout(() => {
            location.href="/";
        }, 500);
        
    });
})









