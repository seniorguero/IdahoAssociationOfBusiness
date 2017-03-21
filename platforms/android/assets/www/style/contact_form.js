"use strict";
var $ = function(id) { return document.getElementById(id); };

//This function is what actually accepts and processes the user data
var processEntries = function() {
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var msg = "Please review your entries and complete all required fields";
	var name = $("name").value;
	var phone = $("phone").value;
    var email = $("email_address").value;
	var comments = $("comments").value;
	
	if (name == "") {
        name = required;          
        header = msg;
    }
	if (phone == "") {
        phone = required;         
        header = msg;
    }
    if (email == "") {
        email = required;          
        header = msg;
    }
    
	//This portion of the code displays the error message at the bottom if the form is missing any necessary data
    $("registration_header").firstChild.nodeValue = header;
    if (header == msg) {     
        html = html + "<tr><td>Name:</td><td>" + name + "</td></tr>";
        html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
		html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        html = html + "<tr><td>Comment:</td><td>Entry length = " + comments.length + "</td></tr>";
        $("registration_info").innerHTML = html;
    } else {
        $("registration_info").innerHTML = ""; 
		// save variables name, phone, email, comments  into sessionStorage
		// sessionStorage.getItem("phone") // for the other page
 		   sessionStorage.name 		= name;
		   sessionStorage.phone 	= phone;
		   sessionStorage.email 	= email;
		   sessionStorage.comments 	= comments;
        $("registration_form").submit();
    }
};

var getDate = function() {
	var today = new Date();
	var date = today.toDateString();
	$("todaysDate").innerHTML= date;
};

//This is the onload function that makes the application run. It calls to the process entries function.
window.onload = function() {
    $("register").onclick = processEntries;
	
	getDate();
	 var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    var pElements = faqs.getElementsByTagName("p");
	
	for (var i = 0; i < pElements.length; i++) {
		pElements[i].setAttribute("display", "none");
	};
};