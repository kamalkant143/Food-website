let navBar =document.querySelector(".mobile");
let closeNavBar = document.querySelector(".fa-xmark")
let nav =document.querySelector(".nav")

console.log(nav);

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
