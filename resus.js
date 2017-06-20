// var main = function () {
// rotation animate arrow icons from up to down
// find snippet for toggle animate
// and make sure it snaps to top of the phase div
// change cursor from typing to arrow when hovering over text next to chevrons



function toggleArrow( x ) {

  //find direction of arrow
  var arrow =  $( x ).attr("src");

  // if arrow is up
  if (arrow == "../imgs/chevup-noun_929004.svg") {
    // the switch it to down
    $( x ).attr("src","../imgs/chevdown-noun_928997.svg");
  };

  // if arrow is down
  if (arrow == "../imgs/chevdown-noun_928997.svg") {
    // the switch it to up
    $( x ).attr("src","../imgs/chevup-noun_929004.svg");
  };

};




$(".problem .expandcollapse").click(function() {

  $(".problem .phasecontent").animate({
    height: 'toggle'
  });

  var thisArrow = ".problem .expandcollapse img";
  toggleArrow (thisArrow);

}); // section is open on page load


$(".proposal .expandcollapse").click(function() {

  $(".proposal .phasecontent").animate({
    height: 'toggle'
  });

  var thisArrow = ".proposal .expandcollapse img";
  toggleArrow (thisArrow);

});


$(".first .expandcollapse").click(function() {

  $(".first .phasecontent").animate({
    height: 'toggle'
  });

  var thisArrow = ".first .expandcollapse img";
  toggleArrow (thisArrow);

});

$(".second .expandcollapse").click(function() {

  $(".second .phasecontent").animate({
    height: 'toggle'
  });

  var thisArrow = ".second .expandcollapse img";
  toggleArrow (thisArrow);

});

$(".third .expandcollapse").click(function() {

  $(".third .phasecontent").animate({
    height: 'toggle'
  });

  var thisArrow = ".third .expandcollapse img";
  toggleArrow (thisArrow);

});

// add any more phases here

$(".last .expandcollapse").click(function() {

  $(".last .phasecontent").animate({
    height: 'toggle'
  });

  var thisArrow = ".last .expandcollapse img";
  toggleArrow (thisArrow);

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





// } // end of 'main' function

// $(document).ready(main);
