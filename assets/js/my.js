var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}

 function blinker()
    {
        if(document.getElementById("blog") && document.getElementById("hi"))
        {
            var d = document.getElementById("blog");
            var h = document.getElementById("hi");
            var top = document.getElementById("top");
            d.style.color= (d.style.color=='yellow' ? 'black':'yellow');            
            h.style.color = (h.style.color=='magenta'?'white':'magenta');
            //top.style.background = (top.style.background=='black'?'images/tuk.jpg':'black');
            setTimeout('blinker()', 1000);
        }
        
    }