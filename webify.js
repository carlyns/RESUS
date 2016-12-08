
var main = function() {
  // CREATE POP UP MODAL FOR FREE PROMOTION
    // This winter we're doing a FREE promotional trial for any 501c3 nonfprofit!  Complete the form by through March 21, 2017 to be eligible!


  // TOGGLING THE MENU ICON

  $(".toggle").click(function() {
    $(".dropdown").toggle();
  });


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

}

$(document).ready(main);
