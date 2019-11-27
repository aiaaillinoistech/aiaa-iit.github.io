window.onload = function() {
    var head = document.createElement("div");
    head.setAttribute("class", "header");
    var title = document.createElement("h1");
    title.appendChild(this.document.createTextNode("AIAA @ Illinois Tech"));
    head.appendChild(title);
    document.body.appendChild(head);
    
    var menu = document.createElement("div");
    menu.setAttribute("class", "topnav");
    document.body.appendChild(menu);

    var menuitems = [["Home", "index.html"],
        ["About", "about.html"],
        ["DBF", "dbf.html"],
        ["Rocketry", "rocketry.html"],
        ["Contact Us", "contact.html"]];

    var parts = window.location.pathname.split('/');
    var page = "";
    if (parts.length == 1) {
        page = "index.html";
    } else {
        page = parts.pop().split("#")[0];
    }

    for (var i = 0; i < menuitems.length; i++) {
        var link = document.createElement("a");
        link.setAttribute("href", "../src/" + menuitems[i][1]);
        link.appendChild(document.createTextNode(menuitems[i][0]));

        if (menuitems[i][1] == page) {
            link.setAttribute("class", "active");
        }

        menu.appendChild(link);
    }

    var foot = document.createElement("div");
    foot.setAttribute("class", "footer");
    var fcon = document.createElement("p");
    fcon.appendChild(document.createTextNode("AIAA IIT"));
    foot.appendChild(fcon);
    document.body.appendChild(foot);
};