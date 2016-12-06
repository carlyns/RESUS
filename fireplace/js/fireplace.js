// collapse all sections on page load
var carlyn = 2;

// show a reminder "Start your profile now, and we’ll remind you to complete it once we officially launch. " on hover of first Start Profile anchor tag in Overview.





// show "it's free" to appear on hover of button when submitting the form




// on click of Submit button,
$('.submitbttn').on("click",function(){
  // save all inputs in variables
  firstN = $('#firstname').val();
  lastN = $('#lastname').val();
  lastinitial = lastN.charAt(0); // DOES VAR NEED TO BE WRAPPED IN () ??
  email = $('#email').val();
  password = $('#password').val();
  housingtype = $('#housingtype').val();
  if ($('#savescreds').is(":checked")) {
    savescreds = true;
  }
  else {
    savescreds = false;
  }


  // hide form
  $('#profileform form').hide(function() {
      $(this).animate({height: 'auto'});
  }, function() {
      $(this).animate({height: 'auto'});
  });


  // show "Thanks!  We'll be in touch!"
  function displayThanks() {
    $('#profileform form').html(
      '<p>' + 'Thanks!  We will be in touch' + '</p>'
      + '<p>' + lastinitial + '</p>'
      + '<p>' + housingtype + '</p>'
    );
  }
  displayThanks();


});






  // smooth scrolling to anchors on page
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
