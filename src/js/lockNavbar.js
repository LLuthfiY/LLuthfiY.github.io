var navbarButton = document.getElementById("navbar-button");
var logo = document.querySelector(".profile");
var logo_Container = document.querySelector(".logo-container");
var nav = document.querySelector(".hovernav");
var ham = document.querySelector(".hamburger");

navbarButton.onclick = function () {
    if (logo.classList.contains("lock")) {
        logo.classList.remove("lock");
        logo_Container.classList.remove("lock");
        nav.classList.remove("lock");
        ham.classList.remove("lock");
    } else {
        logo.classList.add("lock");
        logo_Container.classList.add("lock");
        nav.classList.add("lock");
        ham.classList.add("lock");
    }
};
