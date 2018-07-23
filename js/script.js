$(function (){
	"use strict";
	var scrolling = false;
	$("#scrollUp").click(function () {
		fscroll('up');
		return false;
	});
	$("#scrollDown").click(function () {
		fscroll('down');
		return false;
	});
	$(document).bind('mousewheel DOMMouseScroll', function(e){
        if (e.originalEvent.wheelDelta /120 > 0) {
			fscroll('up');
			return false;
        } else {
			fscroll('down');
			return false;
        }
    });
	
	function fscroll(direction) {
	if (!scrolling) {
		scrolling = true;
		$('html, body').animate({
			'scrollTop': ((direction==='up')? '+=-' : '-=-')+ $(".page").height()+'px' 
		}, 1500, "easeOutExpo", function () {scrolling = false;});
	}
}
});