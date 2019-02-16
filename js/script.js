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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 43.6138689, lng: -116.2430427};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}