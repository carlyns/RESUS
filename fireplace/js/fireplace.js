// collapse all sections on page load

// create checkboxes for 77 CAs
// convert string to array
var firstString =
  "Albany Park, Archer Heights, Armour Square, Ashburn, Auburn Gresham, Austin, Avalon Park, Avondale, Belmont Cragin, Beverly, Bridgeport, Brighton Park, Burnside, Calumet Heights, Chatham, Chicago Lawn, Clearing, Douglas, Dunning, East Garfield Park, East Side, Edgewater, Edison Park, Englewood, Forest Glen, Fuller Park, Gage Park, Garfield Ridge, Grand Boulevard, Greater Grand Crossing, Hegewisch, Hermosa, Humboldt Park, Hyde Park, Irving Park, Jefferson Park, Kenwood, Lake View, Lincoln Park, Lincoln Square";
var secondString =
  "Logan Square, Loop, Lower West Side, McKinley Park, Montclare, Morgan Park, Mount Greenwood, Near North Side, Near South Side, Near West Side, New City, North Center, North Lawndale, North Park, Norwood Park, O’Hare, Oakland, Portage Park, Pullman, Riverdale, Rogers Park, Roseland, South Chicago, South Deering, South Lawndale, South Shore, Uptown, Washington Heights, Washington Park, West Elsdon, West Englewood, West Garfield Park, West Lawn, West Pullman, West Ridge, West Town, Woodlawn";

var firstList = firstString.split(", ");
var secondList = secondString.split(", ");

firstList.forEach(function(option, index){
  var valueAttr = option.toLowerCase();
  var idAttr = valueAttr.replace(/\s/g, '');
  $('.location .col6:first').append( "<label for='" + firstList[index] + "'><input type='checkbox' name='location' id='" + idAttr + "' value='" + firstList[index] + "'>" + firstList[index] + "</label><br>" );
});

secondList.forEach(function(option, index){
  var valueAttr = option.toLowerCase();
  var idAttr = valueAttr.replace(/\s/g, '');
  $('.location .col6:last').append( "<label for='" + secondList[index] + "'><input type='checkbox' name='location' id='" + idAttr + "' value='" + secondList[index] + "'>" + secondList[index] + "</label><br>" );
});

// toggling profile sections
// animate
// GOTTA BE AN EASIER WAY THAN TO WRITE THIS FOR EACH ONE??
$('.basicinfo .icon-chevron-down').on("click",function(){
  $( ".basicinfo form" ).toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  ); // class>element needs to be in correct order!
  $('.basicinfo .display').toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  $('.icon-chevron-down').toggleClass('.icon-chevron-up'); // NOT REMOVING THE DOWN ARROW!

  // also add toggling to summary data
  // (need to put it in a div?)

});
$('.interests .icon-chevron-down').on("click",function(){
  $( ".interests form" ).toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  $('.interests .display').toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );

  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.extra .icon-chevron-down').on("click",function(){
  $( ".extra form" ).toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  $('.extra .display').toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.location .icon-chevron-down').on("click",function(){
  $( ".location form" ).toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  $('.location .display').toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});
$('.downpayment .icon-chevron-down').on("click",function(){
  $( ".downpayment form" ).toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  $('.downpayment .display').toggle(
    function() {
        $(this).animate({height: 'auto'});
    }, function() {
        $(this).animate({height: 'auto'});
    }
  );
  // ADD ARROW TOGGLE WHEN I FIGURE IT OUT
});


// Login status shows PersonX
// currently logged in person is: ? ... make sure this is global
var firstN;
var lastN;
var lastinitial;
var email;
var housingtype;
var savescreds;
// this is only reset 'Logout' button is clicked or on Summary Page when another person's profile can be viewed
// "Save Profile" Button at bottom of Create Profile page
// Populate top of Summary Page with Person 1, 2, 3, ... as Profiles are started.

function nextsection() {
  // slide down to next Section

  // if last Section, then??
}


// on click of Section 1's continue button
$('#sec1button').on("click",function(){
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

  // display user info upon submit
  function displayBasicInfo() {
    $('.basicinfo .summary').html(
      '<p>' + firstN + '</p>'
      + '<p>' + lastinitial + '</p>'
      + '<p>' + email + '</p>'
      + '<p>' + housingtype + '</p>'
    );
  }
  displayBasicInfo();

  // hide input form
  $('.basicinfo form').hide(function() {
      $(this).animate({height: 'auto'});
  }, function() {
      $(this).animate({height: 'auto'});
  });
  // can't hide button bc there's no way to toggle it back on edit


  nextsection();

});



var checkedInterests = [];
var otherInterest;
// on click of Section 2's continue button
$('#sec2button').on("click",function(){

  // which interests were checked
  $('[name="interest"]:checked').each(function(i,e){
    checkedInterests.push(e.value);
  });
  otherInterest = $('#other-interest').val();

  console.log(checkedInterests); // yaay this worked.
  $('.interests .summary').append(checkedInterests + ", " + otherInterest);


  //uncheck checkboxes, field & empty array
  $('.interests form').find('input[type=checkbox]:checked').removeAttr('checked');
  $('#other-interest').val('');

  checkedInterests = [];

  // hide input form & button
  $('.interests form').hide(function() {
      $(this).animate({height: 'auto'});
  }, function() {
      $(this).animate({height: 'auto'});
  });
  // can't hide button bc there's no way to toggle it back on edit

});


var checkedExtras = [];
var otherExtra;
// on click of Section 3's continue button
$('#sec3button').on("click",function(){
  // which extras were checked
  $('[name="extra"]:checked').each(function(i,e){
    checkedExtras.push(e.value);
  });
  otherExtra = $('#other-extra').val();

  console.log(checkedExtras);
  $('.extra .summary').append(checkedExtras + ", " + otherExtra); // space after comma is not showing

  //uncheck checkboxes, field & empty array
  $('.extra form').find('input[type=checkbox]:checked').removeAttr('checked');
  $('#other-extra').val('');

  checkedExtras = [];

  // hide input form & button
  $('.extra form').hide(function() {
      $(this).animate({height: 'auto'});
  }, function() {
      $(this).animate({height: 'auto'});
  });
  // CAN'T HIDE BUTTON bc there's no way to toggle it back on edit

});

var neighbPicks =[];
var qualities;
$('#sec4button').on("click",function(){
  $('[name="location"]:checked').each(function(i,e){
    neighbPicks.push(e.value);
  });
  qualities = $('#neighborhood-qualities').val();

  $('.location .summary p:first').append(neighbPicks + ", ");
  $('.location .summary p:last').append(qualities);

  //uncheck checkboxes, field & empty array
  $('.location form').find('input[type=checkbox]:checked').removeAttr('checked');
  $('#neighborhood-qualities').val('');

  neighbPicks = [];

  // hide input form & button
  $('.location form').hide(function() {
      $(this).animate({height: 'auto'});
  }, function() {
      $(this).animate({height: 'auto'});
  });

});


var afforddown;
// on click of Section 5's continue button
$('#sec5button').on("click",function(){
  afforddown = $('#afforddown').val();

  console.log(afforddown);
  $('.downpayment .summary').append(afforddown);

  // empty input form & empty variable
  afforddown = ''; // NOT EMPTYING VARIABLE
  $('#afforddown').val('$'); // yes, removing value in field

  // hide input form & button
  $('.downpayment form').hide(function() {
      $(this).animate({height: 'auto'});
  }, function() {
      $(this).animate({height: 'auto'});
  });


});



/* ----------- Fake Data ----------- */

// trying something different for location
var neighb1 = true;
var neighb2 = true;
var neighb3 = false;
// ... each person will have 77 with either true/false value
// for each 77 neighborhoods, see if it's true/false.  return the true ones.



// CONVERTING A LIST WITH LINE BREAKS TO AN ARRAY WITH COMMAS. CONVERT ALL TO STRINGS.

var allNeighb =
  [ "Albany Park", "Archer Heights", "Armour Square", "Ashburn", "Auburn Gresham", "Austin", "Avalon Park", "Avondale", "Belmont Cragin", "Beverly", "Bridgeport", "Brighton Park", "Burnside", "Calumet Heights", "Chatham", "Chicago Lawn", "Clearing", "Douglas", "Dunning", "East Garfield Park", "East Side", "Edgewater", "Edison Park", "Englewood", "Forest Glen", "Fuller Park", "Gage Park", "Garfield Ridge", "Grand Boulevard", "Greater Grand Crossing", "Hegewisch", "Hermosa", "Humboldt Park", "Hyde Park", "Irving Park", "Jefferson Park", "Kenwood", "Lake View", "Lincoln Park", "Lincoln Square", "Logan Square", "Loop", "Lower West Side", "McKinley Park", "Montclare", "Morgan Park", "Mount Greenwood", "Near North Side", "Near South Side", "Near West Side", "New City", "North Center", "North Lawndale", "North Park", "Norwood Park", "O’Hare", "Oakland", "Portage Park", "Pullman", "Riverdale", "Rogers Park", "Roseland", "South Chicago", "South Deering", "South Lawndale", "South Shore", "Uptown", "Washington Heights", "Washington Park", "West Elsdon", "West Englewood", "West Garfield Park", "West Lawn", "West Pullman", "West Ridge", "West Town", "Woodlawn"
  ];
var neighbConvertCompare =
  [ "Albany Park", "Archer Heights", "Armour Square", "Ashburn", "Auburn Gresham", "Austin", "Avalon Park", "Avondale", "Belmont Cragin", "Beverly", "Bridgeport", "Brighton Park", "Burnside", "Calumet Heights", "Chatham", "Chicago Lawn", "Clearing", "Douglas", "Dunning", "East Garfield Park", "East Side", "Edgewater", "Edison Park", "Englewood", "Forest Glen", "Fuller Park", "Gage Park", "Garfield Ridge", "Grand Boulevard", "Greater Grand Crossing", "Hegewisch", "Hermosa", "Humboldt Park", "Hyde Park", "Irving Park", "Jefferson Park", "Kenwood", "Lake View", "Lincoln Park", "Lincoln Square", "Logan Square", "Loop", "Lower West Side", "McKinley Park", "Montclare", "Morgan Park", "Mount Greenwood", "Near North Side", "Near South Side", "Near West Side", "New City", "North Center", "North Lawndale", "North Park", "Norwood Park", "O’Hare", "Oakland", "Portage Park", "Pullman", "Riverdale", "Rogers Park", "Roseland", "South Chicago", "South Deering", "South Lawndale", "South Shore", "Uptown", "Washington Heights", "Washington Park", "West Elsdon", "West Englewood", "West Garfield Park", "West Lawn", "West Pullman", "West Ridge", "West Town", "Woodlawn"
  ];


// default all 77 false, except for a few indices that can be changed to true

  // loop through allNeighb and assign 'false' to all of them.
  var oneTest;
  neighbConvertCompare.forEach(function(element, index, allFalse ){
    allFalse[ index ] = false;
    oneTest = allFalse[20];
  });

var neighborhoodPicks = [ "Rogers Park", "Edgewater", "Uptown"]; // test
var locationBooleans = []; // IF I PUT THIS ANYWHERE ELSE, IT'S 'UNDEFINED' AND BREAKS ... AND I STILL CAN'T RETURN ITS VALUE FOR EACH PERSON

// converting an array of a few strings to an array of 77 true/falses
function pickedArraysToBooleans(picks) { // PUT IT IN A FUNCTION WITH A PARAMATER TO BE CALLED IN FOREACH LATER AND IT DIDN'T WORK.  WORKED WHEN CREATED FOR INDIVIDUAL. WEIRD .LENGTH() ERROR IN MIN.JQUERY FILE.
  var nIndices = [];
  // comparing two arrays for matches and getting nIndex
  $.each(picks, function(index , nString ){
    // get index number of matches for allNeighb[i]
    var nIndex = allNeighb.indexOf(nString);

    if( $.inArray( nString, allNeighb ) >= 0 ) {
      console.log( 'We have a match!' + nString + nIndex );

      nIndices.push(nIndex); // create array of indices!
    }
    else {
      ( 'Something is wrong' );
    }
  });
  console.log( 'Array for this person (from called function): ' + nIndices );

  // neighbConvertCompare is already all false
  // use it to redefine each persons' location array
  locationBooleans = neighbConvertCompare;
  locationBooleans[3] = true; // test

  // plug in each value of nIndices array into locations index position to replace falses with trues
  nIndices.forEach(function(value, index ){
    locationBooleans[value] = true;
  });
  // finally, that array represents what the "backend" receives to display the info on group summary page.  i.e. the variables can replace what's in each people object 'location'

}

// these are used later in foreach people object loop
var prefNeighStrings = [];
var prefNeighborhoods = [];

// EVEN THOUGH I'M USING GLOBAL VARIABLES TO STORE FORM VALUES, I'M USING LOCAL VARIABLES BELOW AS OBJECT PROPERTIES (IS THIS CORRECT??) ... THEY SHOULD BE THE SAME IF BACKEND WAS CONFIGURED. FOR THESE PURPOSES, THERE DOESN'T SEEM TO BE A CONFLICT

var people = [];
  // var people = [  this is the actual syntax of the objects
    //   { id: '1', sex: 'm', city: 'Paris' },
    //   { id: '2', sex: 'f', city: 'London' },
    //   ... etc ... .push(); adds more objects  ];

// each person's pref neighborhoods (theoretically selected by dropdown )
var teresa = [ "Bridgeport", "North Center", "Lower West Side", "Douglas", "Rogers Park", "Woodlawn"];
var kenneth = [ "West Town", "South Lawndale", "Lower West Side"];
var mike = [ "West Town", "Near North Side"];
var valerie = [ "Rogers Park", "Edgewater", "Uptown"];

people.push({ // .push just adds these to an array
  firstN: "Valerie",
  lastinitial: "G",
  email: "valentina@gmail.com",
  housingtype: "3-8 unit building",
  music: true,
  travel: true,
  sports: false,
  garage: true,
  carsharing: false,
  guestsuite: true,
  coworking: true,
  musicroom: true,
  eventspace: false,
  bikeroom: true,
  personalstorage: false,
  toolshed: true,
  neighborhoodPicks: valerie, // dropdown selections
  location: locationBooleans, // in false/true form
  qualities: "near a park and a metra line",
  afforddown: 4000,


});
people.push({
  firstN: "Kenneth",
  lastinitial: "A",
  email: "wherekenat@gmail.com",
  housingtype: "2 unit building",
  music: true,
  travel: true,
  sports: true,
  garage: true,
  carsharing: true,
  guestsuite: true,
  coworking: false,
  musicroom: false,
  eventspace: false,
  bikeroom: true,
  personalstorage: true,
  toolshed: true,
  neighborhoodPicks: kenneth, // dropdown selections
  location: locationBooleans, // in false/true form
  qualities: "a bus or train station needs to be within a 5-10 minute walk",
  afforddown: 20000,

});
people.push({
  firstN: "Mike",
  lastinitial: "M",
  email: "mm38@gmail.com",
  housingtype: "15+ unit building",
  music: true,
  travel: false,
  sports: true,
  garage: false,
  carsharing: true,
  guestsuite: true,
  coworking: false,
  musicroom: true,
  eventspace: true,
  bikeroom: false,
  personalstorage: true,
  toolshed: true,
  otherspace: "beermaking",
  neighborhoodPicks: mike, // dropdown selections
  location: locationBooleans, // in false/true form
  qualities: "safety is number one",
  afforddown: 8000,

});
people.push({
  // DOES THE ORDER NEED TO BE CONSISTENT BETWEEN people OBJECTS?
  firstN: "Teresa",
  lastinitial: "J",
  email: "tangel@gmail.com",
  housingtype: "3-8 unit building",
  music: true,
  travel: false,
  sports: false,
  garage: true,
  carsharing: true,
  guestsuite: true,
  coworking: false,
  musicroom: false,
  eventspace: false,
  bikeroom: true,
  personalstorage: true,
  toolshed: true,
  neighborhoodPicks: teresa, // dropdown selections
  location: locationBooleans, // in false/true form
  qualities: "somewhere with trees, good schools, nice buildings and low crime rate",

  afforddown: 30000,

});

/* ----------- end of 'Fake Data' ----------- */


/* ----------- Looping ----------- */
people.forEach(function(element, index){ // WHAT IS ELEMENT AND INDEX REPRESENTING IN THIS CASE??  ELEMENT = KEYS?
  pickedArraysToBooleans(neighborhoodPicks);
  console.log(element.firstN + "'s preferred neighborhoods: " + element.neighborhoodPicks );
  console.log("This should show the true/false array of 77 for: " + element.firstN + " ... " + element.location ); // BUT IT DOESN'T, SEE ABOVE WHERE locationBooleans IS DEFINED.


  // show group members (remember element is a local parameter!)
  $('.basicinfo .display h3:first').after(
    element.firstN + " " + element.lastinitial + ", "
  ); // HOW DO YOU CHANGE ORDER?
  // CURRENTLY UNWRAPPED

  // get the properties/keys of the people objects??
  var keys = Object.keys(people);
  //console.log( keys );

  // show housing type preferences
  $('.basicinfo .display h3').next().after(
    element.firstN + " wants to live in a " + element.housingtype + ", "
  );
  // WHY DOES CHANGING THE COMMA TO <br> LOOP THROUGH WEIRDLY??

  // show interests (make this one function??)
  if(element.music){ //.interests h3:first
    $('#display-music').after(
    "| " + element.firstN
    );
  }
  if(element.travel){ // .interests h3 +.next() ... BETTER WAY THAN USING next/last/first? ... otherwise #ids
    $('#display-travel').after(
      "| " + element.firstN
    );
  }
  if(element.sports){ //.interests h3:last
    $('#display-sports').after(
      "| " + element.firstN
    );
  }

  // show extra spaces & amenities (make this one function??)
  if(element.garage){
    $('#display-garage').after(
      "| " + element.firstN
    );
  }
  if(element.carsharing){
    $('#display-carsharing').after(
      "| " + element.firstN
    );
  }
  if(element.guestsuite){
    $('#display-guestsuite').after(
      "| " + element.firstN
    );
  }
  if(element.coworking){
    $('#display-coworking').after(
      "| " + element.firstN
    );
  }
  if(element.musicroom){
    $('#display-musicroom').after(
      "| " + element.firstN
    );
  }
  if(element.eventspace){
    $('#display-eventspace').after(
      "| " + element.firstN
    );
  }
  if(element.bikeroom){
    $('#display-bikeroom').after(
      "| " + element.firstN
    );
  }
  if(element.personalstorage){
    $('#display-personalstorage').after(
      "| " + element.firstN
    );
  }
  if(element.toolshed){
    $('#display-toolshed').after(
      "| " + element.firstN
    );
  }
  if(element.otherspace){
    $('#display-otherspace').after(
      element.otherspace + ", "
    );
  }

// Locations:
  // if prefNeighbX is now an array of numbers
  // and allNeighb is an array of strings
  // then I should be able to plug the number from the first as an index number into the second

    // for each object, get the array in the location variable
    var neighbArray = element.location; // DOESN'T WORK NOW THAT locationBooleans DON'T WORK.

    // for each object, get the first true
    var firstTrue = neighbArray.indexOf( true ); // only gets the first of specific person's array

    // for each object, get all the trues
    var prefNeighValues;
      //this snippet converts the 'trues' to an array of values, representing array position
      Array.prototype.multiIndexOf = function (el) {
          var idxs = [];
          for (var i = this.length - 1; i >= 0; i--) {
              if (this[i] === el) {
                  idxs.unshift(i);
              }
          }
          return idxs;
      };
    // store in a variable
    prefNeighValues = neighbArray.multiIndexOf( true );

    // for each neighborhood value, convert to neighborhood string
    prefNeighValues.forEach(function( hoodnumber,i ){
      prefNeighStrings = allNeighb[hoodnumber];
    });

    // push each of these values into an array
    prefNeighborhoods.push(prefNeighStrings);

  // display the neighborhood strings in html
  $('.location .display h3:first').after(
    element.neighborhoodPicks + '</br>' // returning with breaks
  );
  $('.location .display h3:last').after(
    element.qualities + '</br>' // returning with breaks
  );



  // display each down payment contribution
  $('.downpayment .display h3:first').after(
    element.afforddown + " + "
  );


});
/* ----------- Looping ends here ----------- */


var grandTotal;
people[0].afforddown;
people[1].afforddown;
people[2].afforddown;
people[3].afforddown;
grandTotal = people[0].afforddown + people[1].afforddown + people[2].afforddown + people[3].afforddown;
building = grandTotal/0.2;
console.log(grandTotal);
// do it dymnaically: another for each to cycle through each persons' afforddown
people.forEach(function(element, index){

});
$('.downpayment .display h3:first').append(
  "$" + grandTotal + " for a collective down payment." + "</br>"
);
$('.downpayment .display h3:last').append(
  "$" + building
);

// experiment with local data only with "logged in" user in upper corner ...



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
