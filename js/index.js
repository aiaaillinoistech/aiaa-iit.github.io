function fillcontent(parent) {
    xhreq = new XMLHttpRequest();
    xhreq.onreadystatechange = function() {
        console.log(this.readystate);
        if (this.readystate == 4) {
            if (this.status ==200) {
                parent.innerHTML = this.responseText;
            } else if (this.status == 404) {
                parent.innerHTML = '<p>This page has no content!</p><br><a href="Please email mailto:aiaa@iit.edu>aiaa@iit.edu</a> so the issue may be resolved."';
            }
        }
    }
    xhreq.open("GET", "index-con.html", true);
    xhreq.send();
    return;
};