function toggleburger() {
    var x = document.getElementById("menu");
    var b = x.getElementsByClassName("burger")[0].children[0];
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
        b.className = "fa fa-bars";
    } else {
        x.classList.add("responsive");
        b.className = "fa fa-times";
    }
}

window.onload = function() {
    var fa = document.createElement("script");
    fa.setAttribute("src", "https://use.fontawesome.com/c6ece5129d.js");
    document.head.appendChild(fa);

    var main = document.getElementsByClassName("main")[0];
    var con = document.getElementsByClassName("content")[0];

    var head = document.createElement("div");
    head.setAttribute("class", "header");
    var title = document.createElement("h1");
    title.appendChild(this.document.createTextNode("AIAA @ Illinois Tech"));
    head.appendChild(title);
    main.insertBefore(head, con);
    
    var menu = document.createElement("div");
    menu.setAttribute("class", "topnav");
    menu.setAttribute("id", "menu")
    main.insertBefore(menu, con);

    var menuitems = [["Home", "index.html"],
        ["About", "about.html"],
        ["DBF", "dbf.html"],
        ["Rocketry", "rocketry.html"],
        ["Contact Us", "contact.html"]];

    var parts = window.location.pathname.split("/");
    var page = parts.pop();
    if (page == "") {
        page = "index.html";
    } else if (page.split("#").length != 1) {
        page = page.split("#")[0];
    }

    for (var i = 0; i < menuitems.length; i++) {
        var link = document.createElement("a");
        link.setAttribute("href", menuitems[i][1]);
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
    
    var foot = document.createElement("div");
    foot.setAttribute("class", "footer");
    var fcon = document.createElement("p");
    fcon.appendChild(document.createTextNode("AIAA IIT"));
    foot.appendChild(fcon);
    main.appendChild(foot);

    fillcontent(con);
};

window.onscroll = function() {
    var menu = document.getElementById("menu");

    if (window.pageYOffset >= 80) {
        menu.classList.add("sticky");
    } else {
        menu.classList.remove("sticky");
    }
};