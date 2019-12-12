function fillcontent(parent) {
    GetNews();
    setInterval(() => { moveslide(1); }, 10000);
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