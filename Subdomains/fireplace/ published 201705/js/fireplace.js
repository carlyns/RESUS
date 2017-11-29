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
      $('.scrolltext').html( 'reliable renter');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;

  setTimeout( function() {
      $('.scrolltext').html( 'housing burdened');
    } , currentTime + addtwoseconds
  );
  currentTime = currentTime + addtwoseconds;

}

oneLoop ();
oneLoop ();



// Get the modal
var modal = document.getElementById('popout');

// Get the button that opens the modal
var btn = document.getElementById('sharedbenefits');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


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
