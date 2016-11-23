// confirm("Ready to learn about webify?  Click OK");
// confirm("Are you having fuuuuuuun?");

// TOGGLING THE MENU ICON
var main = function() {
  $(".toggle").click(function() {
    $(".dropdown").toggle();
  });
}

// SMOOTH SCROLLING TO ANCHORS ON PAGE
// snippet from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// HIDE TOPBAR (INLUDING NAV) AFTER TWO SECONDS, ONLY ON MOBILE???

// ALSO HIDE IT (INLUDING NAV) ON CLICK OF NAV.



$(document).ready(main);
