window.onscroll = function () {
    //console.log(yoffset);

    var logo = document.querySelector(".profile");
    var logo_Container = document.querySelector(".logo-container");
    var nav = document.querySelector(".hovernav");
    var ham = document.querySelector(".hamburger");
    var topImage = document.getElementById("glasses");

    if (window.pageYOffset < 370) {
        logo.classList.remove("scrolled");
        logo_Container.classList.remove("scrolled");
        nav.classList.remove("scrolled");
        ham.classList.remove("scrolled");
    } else {
        logo.classList.add("scrolled");
        logo_Container.classList.add("scrolled");
        nav.classList.add("scrolled");
        ham.classList.add("scrolled");
    }

    topImage.style.marginTop = "-" + window.pageYOffset / 2 + "px";

    //biodata

    var nameBox = document.querySelector(".box-name");
    var cityBox = document.querySelector(".box-city");

    var yoffset = window.pageYOffset;
    if ((800 < yoffset) & (yoffset < 1700)) {
        nameBox.classList.add("scrolled");
        cityBox.classList.add("scrolled");
    } else {
        nameBox.classList.remove("scrolled");
        cityBox.classList.remove("scrolled");
    }

    //work at

    if (yoffset > 1360) {
        var workat = document.getElementById("work-at");
        workat.style.top = (yoffset - 1360) / 2 + "px";
    }
    //lang

    if (yoffset > 3700) {
        var lang = document.getElementById("lang-text");
        lang.style.top = (yoffset - 3700) * 0.5 + "px";

        var js = document.getElementById("javascript");
        js.style.top = (yoffset - 3700) * 0.4 + "px";

        var cs = document.getElementById("cs");
        cs.style.top = (yoffset - 3700) * 0.4 + "px";

        var java = document.getElementById("java");
        java.style.top = (yoffset - 3700) * 0.3 + "px";

        var rust = document.getElementById("rust");
        rust.style.top = (yoffset - 3700) * 0.25 + "px";

        var kotlin = document.getElementById("kotlin");
        kotlin.style.top = (yoffset - 3700) * 0.2 + "px";

        var python = document.getElementById("python");
        python.style.top = (yoffset - 3700) * 0 + "px";

        var andmore = document.getElementById("and-more");
    }

    console.log(yoffset);
};
