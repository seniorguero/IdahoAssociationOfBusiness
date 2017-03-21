"use strict";
var $ = function(id) { return document.getElementById(id); };

var OutputForm;



var displayForm = function() {
	
	var html = "";
	//
	html  +=  sessionStorage.getItem("email")    || "";
	html  +=  "<br/>\n";
	//
	//
	OutputForm.innerHTML = html;
};


window.onload = function(){
    //
	// set the element now that the page is loaded
	OutputForm  =  $("EmailConfirm");
	// 
	//
	displayForm();
	
};