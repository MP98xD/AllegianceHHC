$(function (){
	"use strict";

	let navHash = ['contactSection', 'aboutSection', 'servicesSection', 'homeSection'];
	$("header #navbar ul li a").each(function() {
		$(this).attr('href', "#"+navHash.pop());
	})

	$('.fullpage').fullpage({
		licenseKey: 'YOUR_KEY_HERE',
		anchors: ['homeSection', 'servicesSection', 'aboutSection', 'contactSection'],
		menu: '#fullpageMenu'
    });
	$("#scrollUp").click(function (e) {
		e.preventDefault();
        $.fn.fullpage.moveSectionUp();
	});
	$("#scrollDown").click(function (e) {
		e.preventDefault();
        $.fn.fullpage.moveSectionDown();
	});
});