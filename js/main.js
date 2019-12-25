function toggleburger() {
    var menu = document.getElementById("menu");
    var b = menu.getElementsByClassName("burger")[0].children[0];
    var con = document.getElementsByClassName("content")[0];
    if (menu.classList.contains("responsive")) {
        menu.classList.remove("responsive");
        b.className = "fa fa-bars";
    } else {
        menu.classList.add("responsive");
        b.className = "fa fa-times";
    }

    if (menu.classList.contains("sticky")) {
        con.style = "padding-top: " + (menu.offsetHeight + 10) + "px;";
    }
}

window.onload = function() {
    document.getElementById("ics").remove();

    fillcontent(document.getElementsByClassName("content")[0]);
};

window.onscroll = function() {
    var head = document.getElementsByClassName("header")[0];
    var menu = document.getElementById("menu");
    var cont = document.getElementsByClassName("content")[0];

    if (window.pageYOffset > head.offsetHeight && !menu.classList.contains("sticky")) {
        menu.classList.add("sticky");
        cont.style = "padding-top: " + (menu.offsetHeight + 10) + "px;";
    } else if (window.pageYOffset <= head.offsetHeight) {
        menu.classList.remove("sticky");
        cont.style = "padding-top: 10px;";
    }
};