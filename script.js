let navBar =document.querySelector(".mobile");
let closeNavBar = document.querySelector(".fa-xmark")
let nav =document.querySelector(".nav")
let carIteam =document.querySelector(".fa-cart-shopping")
let cartBox  =document.querySelector(".cart-iteams")
let body  =document.querySelector("body")



if(navBar){
    navBar.addEventListener("click",function(){
        nav.classList.add("active")
    })
}


if(closeNavBar){
    closeNavBar.addEventListener("click",function(){
        nav.classList.remove("active")
    })
}

// ----- cart --------

if(carIteam){
    carIteam.addEventListener("click",function(){
        cartBox.classList.toggle("move-iteam")
    })
}

