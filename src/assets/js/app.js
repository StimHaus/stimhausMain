$(document).foundation();

var hamburger = $('#menu-toggle');
var offCanvasRight = $("#offCanvasRight");
var overlay = $('.js-off-canvas-overlay');
hamburger.click(function(){
  $(this).addClass('open');
});
overlay.click(function(){
	hamburger.removeClass('open');
});