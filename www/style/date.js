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
	   $("Calculate_button").onclick = processEntries;
};