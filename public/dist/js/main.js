const navButton = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav");
const navImage = document.querySelector(".nav-img");
const navList = document.querySelector(".nav-list");
const navSocial = document.querySelector(".nav_social-list");
const navOverlay = document.querySelector(".nav-overlay");
const navitem = document.querySelectorAll(".nav-item");

let showNav = false;

navButton.addEventListener("click", openNav);

function openNav () {
    if(!showNav) {
        navButton.classList.add("close");
        navMenu.classList.add("show");
        navList.classList.add("show");
        navImage.classList.add("show");
        navSocial.classList.add("show");
        navOverlay.classList.add("show");
        navitem.forEach(item =>{
            item.classList.add("show");
        });
        showNav = true;
    }else {
        navButton.classList.remove("close");
        navMenu.classList.remove("show");
        navList.classList.remove("show");
        navImage.classList.remove("show");
        navSocial.classList.remove("show");
        navOverlay.classList.remove("show");
        navitem.forEach(item =>{
            item.classList.remove("show");
        });
        showNav = false;
    }
}

navitem.forEach(item => {
    item.addEventListener("click", openNav)
})