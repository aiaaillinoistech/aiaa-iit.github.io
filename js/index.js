var pos = 0;
var head;

function fillcontent(parent) {
    GetNews();
    setInterval(() => { moveslide(1); }, 10000);
    
    if (window.innerWidth > 768) {
        head = document.getElementById("head-img");
        pos = Number(window.getComputedStyle(head, null).getPropertyValue("top").split('p')[0]);
    } else {
        head = document.getElementsByClassName("header")[0];
    }
};

var slideIndex = 1;

function moveslide(n) {
    showSlides(slideIndex += n);
}

function setslide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "table";
    dots[slideIndex - 1].className += " active";
}

window.addEventListener('scroll', parallax);
window.addEventListener('resize', fixpos);
function parallax() {
    var h1 = document.getElementsByClassName("header")[0].getElementsByTagName("h1")[0];

    if (window.innerWidth > 768) {
        head.style.top = pos + window.pageYOffset*.2 + "px";
    } else {
        head.style.backgroundPosition = "40% " + (window.pageYOffset*.1) + "px";
    }
    h1.style.backgroundColor = "rgba(0,0,0," + (0.4 + window.pageYOffset*.001) + ")";
};

function fixpos() {
    if (window.innerWidth > 768) {
        pos = -.42 * window.innerWidth;
        head = document.getElementById("head-img");
        head.style.top = pos + window.pageYOffset*.2 + "px";
    } else {
        head = document.getElementsByClassName("header")[0];
        head.style.backgroundPosition = "40% " + (window.pageYOffset*.1) + "px";
    }
}