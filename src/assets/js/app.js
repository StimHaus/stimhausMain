$(document).foundation();

// DEFINE GLOBAL VARIABLES FOR COMMON OBJECTS //
var hamburger = $('#menu-toggle');
var offCanvasRight = $("#offCanvasRight");
var overlay = $('.js-off-canvas-overlay');

// CREATE OFF CANVAS NAVIGATION TOGGLE //
hamburger.click(function(){
  $(this).addClass('open');
});
overlay.click(function(){
	hamburger.removeClass('open');
});