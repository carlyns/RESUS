

// CURATED PAGES: TOGGLE BETWEEN STEPS ON DESKTOP

// start off with Step 1 displayed
$(".desktopcontent1").addClass("showdesktopstep");
$(".step1").addClass("active-tab");
$(".step1 .stepicon").addClass("active-step");

var allButDesktop1 = ".desktopcontent2, .desktopcontent3, .desktopcontent4, .desktopcontent5";
var allButDesktop2 = ".desktopcontent1, .desktopcontent3, .desktopcontent4, .desktopcontent5";
var allButDesktop3 = ".desktopcontent1, .desktopcontent2, .desktopcontent4, .desktopcontent5";
var allButDesktop4 = ".desktopcontent1, .desktopcontent2, .desktopcontent3, .desktopcontent5";
var allButDesktop5 = ".desktopcontent1, .desktopcontent2, .desktopcontent3, .desktopcontent4";

var allButStep1 = ".step2, .step3, .step4, .step5";
var allButStep2 = ".step1, .step3, .step4, .step5";
var allButStep3 = ".step1, .step2, .step4, .step5";
var allButStep4 = ".step1, .step2, .step3, .step5";
var allButStep5 = ".step1, .step2, .step3, .step4";

var allButStepicon1 = ".step2 .stepicon, .step3 .stepicon, .step4 .stepicon, .step5 .stepicon";
var allButStepicon2 = ".step1 .stepicon, .step3 .stepicon, .step4 .stepicon, .step5 .stepicon";
var allButStepicon3 = ".step1 .stepicon, .step2 .stepicon, .step4 .stepicon, .step5 .stepicon";
var allButStepicon4 = ".step1 .stepicon, .step2 .stepicon, .step3 .stepicon, .step5 .stepicon";
var allButStepicon5 = ".step1 .stepicon, .step2 .stepicon, .step3 .stepicon, .step4 .stepicon";


$(".step1").click(function() {
  $(allButDesktop1).removeClass("showdesktopstep");
  $(".desktopcontent1").addClass("showdesktopstep");
  $(".step1").addClass("active-tab");
  $(allButStep1).removeClass("active-tab");
  $(".step1 .stepicon").addClass("active-step");
  $(allButStepicon1).removeClass("active-step");

});
$(".step2").click(function() {
  $(allButDesktop2).removeClass("showdesktopstep");
  $(".desktopcontent2").addClass("showdesktopstep");
  $(".step2").addClass("active-tab");
  $(allButStep2).removeClass("active-tab");
  $(".step2 .stepicon").addClass("active-step");
  $(allButStepicon2).removeClass("active-step");

});
$(".step3").click(function() {
  $(allButDesktop3).removeClass("showdesktopstep");
  $(".desktopcontent3").addClass("showdesktopstep");
  $(".step3").addClass("active-tab");
  $(allButStep3).removeClass("active-tab");
  $(".step3 .stepicon").addClass("active-step");
  $(allButStepicon3).removeClass("active-step");

});
$(".step4").click(function() {
  $(allButDesktop4).removeClass("showdesktopstep");
  $(".desktopcontent4").addClass("showdesktopstep");
  $(".step4").addClass("active-tab");
  $(allButStep4).removeClass("active-tab");
  $(".step4 .stepicon").addClass("active-step");
  $(allButStepicon4).removeClass("active-step");

});
$(".step5").click(function() {
  $(allButDesktop5).removeClass("showdesktopstep");
  $(".desktopcontent5").addClass("showdesktopstep");
  $(".step5").addClass("active-tab");
  $(allButStep5).removeClass("active-tab");
  $(".step5 .stepicon").addClass("active-step");
  $(allButStepicon5).removeClass("active-step");

});



$(document).ready(main);
