var wasMobile = true;

function moveColumn() {
    if ($(window).innerWidth() < 768 && !wasMobile) {
        $('.e').detach().insertAfter('.d');
        wasMobile = true;
    } else if ($(window).innerWidth() >= 768 && wasMobile) {
        $('.e').detach().insertAfter('.c');
        wasMobile = false;
    }
}

//When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.getElementById("mNav").style.top = "0";
   } else {
     document.getElementById("mNav").style.top = "-50px";
   }
   prevScrollpos = currentScrollPos;
 } 

var wasMobile = true;
function moveColumn() {
    if ($(window).innerWidth() < 768 && !wasMobile) {
        $('.e').detach().insertAfter('.d');
        wasMobile = true;
    } else if ($(window).innerWidth() >= 768 && wasMobile) {
        $('.e').detach().insertAfter('.c');
        wasMobile = false;
    }
}

