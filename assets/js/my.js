

function blinker() {
    if (document.getElementById("blog") && document.getElementById("hi")) {
        var d = document.getElementById("blog");
        var h = document.getElementById("hi");
        var top = document.getElementById("top");
        d.style.color = (d.style.color == 'yellow' ? 'black' : 'yellow');
        h.style.color = (h.style.color == 'magenta' ? 'white' : 'magenta');
        //top.style.background = (top.style.background=='black'?'images/tuk.jpg':'black');
        setTimeout('blinker()', 1000);
    }

}
