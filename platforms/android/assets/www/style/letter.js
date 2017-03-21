"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {   
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields";
    var email = $("email_address").value;
    var terms = $("signup_checkbox").checked;

    if (email == "") {
        email = required;          
        header = msg;
    }
    if (terms == false) {
        terms = required;
        header = msg;
    }
    
    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = "";
		// save variables name, phone, email, comments  into sessionStorage
		// sessionStorage.getItem("phone") // for the other page
		sessionStorage.email 	= email;
        $("registration_form").submit();
    }
};

/*var getDate = function() {
	var today = new Date();
	var date = today.toDateString();
	$("todaysDate").innerHTML= date;
};*/

window.onload = function() {
    $("register").onclick = processEntries;  
    $("email_address").focus();
	
//	getDate();
	

};// JavaScript Document

