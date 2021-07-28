var navbarButton = document.getElementById("hovernav");
var logo = document.querySelector(".profile");
var logo_Container = document.querySelector(".logo-container");
var nav = document.querySelector(".hovernav");
var ham = document.querySelector(".hamburger");

navbarButton.onmouseover = function () {
    hoverin();
};
navbarButton.onmouseout = function () {
    hoverout();
};

function hoverin() {
    logo.classList.add("hover");
    logo_Container.classList.add("hover");
    nav.classList.add("hover");
    ham.classList.add("hover");
}

function hoverout() {
    logo.classList.remove("hover");
    logo_Container.classList.remove("hover");
    nav.classList.remove("hover");
    ham.classList.remove("hover");
}
