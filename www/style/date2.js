// JavaScript Document
"use strict";
var $ = function(id) { return document.getElementById(id); };

var getDate = function() {
	var today = new Date();
	var date = today.toDateString();
	$("todaysDate").innerHTML= date;
};

window.onload = function() { 
	getDate();
	 var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    var pElements = faqs.getElementsByTagName("p");
	
	for (var i = 0; i < pElements.length; i++) {
		pElements[i].setAttribute("display", "none");
	};
};

//Copy all of this into the onload
//Be ready to start a whole new date file
//Reference the contact form onload
