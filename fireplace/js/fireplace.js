// collapse all sections on page load
var carlyn = 2;

var currentTime = 0;
var addtwoseconds = 2000;

// replacing the "scroll" text
function oneLoop () {
  setTimeout( function() {
      $('.scrolltext').html( 'basement millennial');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;
  setTimeout( function() {
      $('.scrolltext').html( 'freelancer');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;

  setTimeout( function() {
      $('.scrolltext').html( 'empty nester');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;

  setTimeout( function() {
      $('.scrolltext').html( 'middle class');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;

  setTimeout( function() {
      $('.scrolltext').html( 'housing burdened');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;
  
  setTimeout( function() {
      $('.scrolltext').html( 'reliable renter');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;

}

oneLoop ();
oneLoop ();
oneLoop ();

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


  // show popout button?
  function displayThanks() {
    $('#profileform h2').html(
      'you\'ve started a profile'
    );
    $('#profileform h3').html(
      '<p>' + 'Thanks, ' + firstN + '!  </p>'
      + '<p>' + lastinitial + '</p>'
      + '<p>Ooh, ' + housingtype + '... nice choice.  We\'re excited for you to get started. <br> We\'ll notify you when the tool is up and running. </p>'
    );
  }
  displayThanks();
});



// stop refresh on submit click
$('form').submit(function(e) {
  e.preventDefault();
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
