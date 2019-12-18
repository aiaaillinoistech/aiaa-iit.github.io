function toggleburger() {
    var menu = document.getElementById("menu");
    var b = menu.getElementsByClassName("burger")[0].children[0];
    if (menu.classList.contains("responsive")) {
        menu.classList.remove("responsive");
        b.className = "fa fa-bars";

        document.getElementsByClassName("content")[0].style = "padding-top: " + (document.getElementById("menu").offsetHeight + 10) + "px;";
    } else {
        menu.classList.add("responsive");
        b.className = "fa fa-times";
    }
}

window.onload = function() {
    var main = document.body;
    var con = document.getElementsByClassName("content")[0];
    
    var menu = document.createElement("div");
    menu.setAttribute("class", "topnav");
    menu.setAttribute("id", "menu")
    main.insertBefore(menu, con);

    var menuitems = [["Home", "/", "fas fa-home"],
        ["About", "about.html", "fas fa-info"],
        ["DBF", "dbf.html", "fas fa-plane", ["DAT to CSV", 'dat2csv.html']],
        ["Rocketry", "rocketry.html", "fas fa-rocket"],
        ["Contact Us", "contact.html", "fas fa-envelope"]];

    var parts = window.location.pathname.split("/");
    var page = parts.pop();
    if (page == "") {
        page = "/";
    } else if (page.split("#").length != 1) {
        page = page.split("#")[0];
    }

    var set = false;

    for (var i = 0; i < menuitems.length; i++) {
        var item = menuitems[i];
        var icon = document.createElement("i");
        icon.className = item[2];
        
        var link = document.createElement("a");
        link.setAttribute("href", item[1]);

        link.appendChild(icon);
        link.appendChild(document.createTextNode(item[0]));

        if (item[1] == page) {
            link.classList.add("active");
            set = true;
        }

        menu.appendChild(link);

        if (item.length == 4) {
            var sub = item[3];

            var drop = document.createElement("div");
            drop.classList.add("dropdown");

            var dlink = document.createElement("a");
            dlink.setAttribute("href", sub[1]);
            dlink.appendChild(document.createTextNode(sub[0]));

            if (sub[1] == page) {
                dlink.classList.add("active");
                menu.appendChild(dummylink(sub[0]));
                set = true;
            }

            drop.appendChild(dlink);
            link.appendChild(drop);
        }
    }

    if (!set) {
        var name = page.split('.')[0];
        menu.appendChild(dummylink(name.charAt(0).toUpperCase() + name.split('.')[0].slice(1)));
    }

    var link = document.createElement("a");
    link.setAttribute("class", "burger");
    link.setAttribute("href", "javascript:void(0);");
    link.setAttribute("onclick", "toggleburger()");
    var burger = document.createElement("i");
    burger.setAttribute("class", "fa fa-bars");
    link.appendChild(burger);
    menu.appendChild(link);

    document.getElementById("ics").remove();

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

function dummylink(title) {
    var link = document.createElement("a");
    link.classList.add("active");
    link.classList.add("extra");
    link.appendChild(document.createTextNode(title));
    return link;
}