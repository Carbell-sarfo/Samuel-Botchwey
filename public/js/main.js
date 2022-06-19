const navButton = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav");
const navImage = document.querySelector(".nav-img");
const navList = document.querySelector(".nav-list");
const navSocial = document.querySelector(".nav_social-list");
const navOverlay = document.querySelector(".nav-overlay");
const navBackground = document.querySelector(".nav-bg");
// const darkSwitch = document.querySelector(".switch-box");
const navitem = document.querySelectorAll(".nav-item");

let showNav = false;

navButton.addEventListener("click", openNav);
navOverlay.addEventListener("click", openNav);
navitem.forEach(item => {
    item.addEventListener("click", openNav)
})


function openNav () {
    if(!showNav) {
        navButton.classList.add("close");
        navMenu.classList.add("show");
        navList.classList.add("show");
        navImage.classList.add("show");
        navSocial.classList.add("show");
        navOverlay.classList.add("show");
        navBackground.classList.add("show");
        // darkSwitch.classList.add("show");
        navitem.forEach(item =>{
            item.classList.add("show");
        });
        document.body.classList.add("no-scroll");
        showNav = true;
    }else {
        navButton.classList.remove("close");
        navMenu.classList.remove("show");
        navList.classList.remove("show");
        navImage.classList.remove("show");
        navSocial.classList.remove("show");
        navOverlay.classList.remove("show");
        // darkSwitch.classList.remove("show");
        navBackground.classList.remove("show");
        navitem.forEach(item =>{
            item.classList.remove("show");
        });
        document.body.classList.remove("no-scroll");
        showNav = false;
    }
}




// =========== DAY AND NIGHT SWITCH =============
// let darkMode = localStorage.getItem("darkMode");
// const darkModeSwitch = document.querySelector("#switch");

// Check if darkmode is enabled
// if it is disabled, turn it on
// if it is enabled, turn it off

// const enableDarkMode = () => {
//     document.body.classList.add("night");
//     localStorage.setItem('darkMode', "enabled");
// }
// const disableDarkMode = () => {
//     document.body.classList.remove("night");
//     localStorage.setItem('darkMode', null);
// }

// if(darkMode === "enabled") {
//     enableDarkMode();
//     darkModeSwitch.checked = true;
// }

// darkModeSwitch.addEventListener("click", () => {
//     darkMode = localStorage.getItem('darkMode');
//     if(darkMode !== "enabled") {
//         enableDarkMode();
//     }else {
//         disableDarkMode();
//     }
// });
