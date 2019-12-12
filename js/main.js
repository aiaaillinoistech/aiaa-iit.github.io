function toggleburger() {
    var menu = document.getElementById("menu");
    var b = menu.getElementsByClassName("burger")[0].children[0];
    if (menu.classList.contains("responsive")) {
        menu.classList.remove("responsive");
        b.className = "fa fa-bars";
    } else {
        menu.classList.add("responsive");
        b.className = "fa fa-times";
    }
}

window.onload = function() {
    var fa = document.createElement("script");
    fa.setAttribute("src", "https://kit.fontawesome.com/b287813185.js");
    fa.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(fa);

    var main = document.body;
    var con = document.getElementsByClassName("content")[0];
    
    var menu = document.createElement("div");
    menu.setAttribute("class", "topnav");
    menu.setAttribute("id", "menu")
    main.insertBefore(menu, con);

    var menuitems = [["Home", "index.html", "fas fa-home"],
        ["About", "about.html", "fas fa-info"],
        ["DBF", "dbf.html", "fas fa-plane"],
        ["Rocketry", "rocketry.html", "fas fa-rocket"],
        ["Contact Us", "contact.html", "fas fa-envelope"]];

    var parts = window.location.pathname.split("/");
    var page = parts.pop();
    if (page == "") {
        page = "index.html";
    } else if (page.split("#").length != 1) {
        page = page.split("#")[0];
    }

    for (var i = 0; i < menuitems.length; i++) {
        var icon = document.createElement("i");
        icon.className = menuitems[i][2];
        
        var link = document.createElement("a");
        link.setAttribute("href", menuitems[i][1]);

        link.appendChild(icon);
        link.appendChild(document.createTextNode(menuitems[i][0]));

        if (menuitems[i][1] == page) {
            link.setAttribute("class", "active");
        }

        menu.appendChild(link);
    }

    var link = document.createElement("a");
    link.setAttribute("class", "burger");
    link.setAttribute("href", "javascript:void(0);");
    link.setAttribute("onclick", "toggleburger()");
    var burger = document.createElement("i");
    burger.setAttribute("class", "fa fa-bars");
    link.appendChild(burger);
    menu.appendChild(link);

    var temp = document.createElement("p");
    temp.appendChild(document.createTextNode("Under Construction"));
    con.appendChild(temp);

    fillcontent(con);
};

window.onscroll = function() {
    var head = document.getElementsByClassName("header")[0];
    var menu = document.getElementById("menu");
    var cont = document.getElementsByClassName("content")[0];

    if (window.pageYOffset > head.offsetHeight) {
        menu.classList.add("sticky");
        cont.style = "padding-top: " + (menu.offsetHeight + 10) + "px;";
    } else {
        menu.classList.remove("sticky");
        cont.style = "padding-top: 10px;";
    }
};