//navbar function
function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//loader function
var myVar;
function load() {
    myVar = setTimeout(showPage, 1500);
}

//display function
function showPage() {
    document.getElementById("loader").style.opacity = "0";
    document.getElementById("display").style.display = "block";
}

/*function loadAbout() {
    var offset = window.pageYOffset;
    window.onscroll = function () {
        if (prevScrollpos > 900) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
}*/
