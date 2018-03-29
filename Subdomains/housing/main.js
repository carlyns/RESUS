var main = function() {

  // (bootstratp jquery worked but then custom jquery did not fire.  but adding jquery manually caused bootstrap jquery to stop firing. so adding orig bootstratp jquery in this custom file. )

  // TOGGLING TEXT
  $('#optionA').click(function()) {
    $('#structureA')
  };
  $('#optionB').click(function()) {
    $('#structureB')
  };
  $('#optionC').click(function()) {
    $('#structureC')
  };

  $('#morelimeq').click(function()) {
    $('#limeq')
  };


  // SMOOTH SCROLLING TO ANCHORS ON PAGE, from CSS Tricks
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

}


$(document).ready(main);
