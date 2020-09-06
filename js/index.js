var pos = 0;
var head;

var slideIndex = 1;

function moveslide(n) {
    showSlides(slideIndex += n);
}

function setslide(n) {
    showSlides(slideIndex = n);
    resetTimer();
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

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

var a = null;
window.onresize = function() {
    if (a != null) {
        clearTimeout(a);
    }

    a = setTimeout(function() {
        newWidth = document.getElementById("twitter-widget-0").scrollWidth
        document.getElementsByClassName("fb-page")[0].setAttribute("data-width", newWidth <= 500 ? newWidth : 500);
        FB.XFBML.parse();
    }, 1000);
}

function toggleAuto() {
    var btn = document.getElementsByClassName("toggle-auto")[0];
    var d = new Date();
    d.setFullYear(2100);
    if (autoScroll == -1) {
        autoScroll = setInterval(() => { moveslide(1); }, 10000);
        btn.innerHTML = "Auto-scroll on";
        btn.classList.remove("auto-off");
        btn.classList.add("auto-on");
        document.cookie = "auto-scroll=on;expires=" + d.toUTCString(); + ";samesite=strict";
    } else {
        clearInterval(autoScroll);
        autoScroll = -1;
        btn.innerHTML = "Auto-scroll off";
        btn.classList.remove("auto-on");
        btn.classList.add("auto-off");
        document.cookie = "auto-scroll=off;expires=" + d.toUTCString(); + ";samesite=strict";
    }
}

function resetTimer() {
    if (autoScroll != -1) {
        clearInterval(autoScroll);
        autoScroll = setInterval(() => { moveslide(1); }, 10000);
    }
}