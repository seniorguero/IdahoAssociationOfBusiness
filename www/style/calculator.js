// JavaScript Document
"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

/*var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
	return futureValue;
};*/

		window.alert("Test");

var processEntries = function() {
    var revenue = parseFloat( $("revenue").value );
    var federal_rate = 0;
	var tax_holder = 0;
    var years = parseInt( $("years").value );
	var allValid = true;
	
	if (isNaN(revenue)) {
		$("investment_error").firstChild.nodeValue = "Must input a number";
		window.alert("Test");
		allValid = false;
	}
	else {
		$("investment_error").firstChild.nodeValue = "";
	}
	//You need an if statement for the Federal taxes based on the Federal corporate tax rate 
	//You are going to need to disable all of the other
	if (isNaN(revenue) || revenue < 0 || revenue==0) {
		$("federal_rate").Value = "Business owes no taxes";
		allValid = false;
	}
	else if ((isNaN(revenue)) || (0 < revenue && revenue < 50000)) {
		federal_rate=.15;
		$("federal_rate").Value = (revenue*federal_rate).toString;
		allValid = false;
	}
	else if ((isNaN(revenue)) || (50000 <= revenue && revenue < 75000)) {
		tax_holder=7500;
		federal_rate=.25;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	else if ((isNaN(revenue)) || (75000 <= revenue && revenue < 100000)) {
		tax_holder=13750;
		federal_rate=.34;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	else if ((isNaN(revenue)) || (100000 <= revenue && revenue < 335000)) {
		tax_holder=22250;
		federal_rate=.39;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	else if ((isNaN(revenue)) || (335000 <= revenue && revenue < 10000000)) {
		tax_holder=113900;
		federal_rate=.34;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	else if ((isNaN(revenue)) || (10000000 <= revenue && revenue < 15000000)) {
		tax_holder=3400000;
		federal_rate=.35;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	else if ((isNaN(revenue)) || (15000000 <= revenue && revenue < 18333333)) {
		tax_holder=5150000;
		federal_rate=.38;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	else if ((isNaN(rate)) || (18333333 <= revenue)) {
		tax_holder=0;
		federal_rate=.35;
		$("federal_rate").Value = (revenue*federal_rate+tax_holder).toString;
		allValid = false;
	}
	
	else {
		$("rate_error").firstChild.nodeValue = "";
	}
	if (isNaN(years) || years <= 0 || years > 50) {
		$("years_error").firstChild.nodeValue = "Must be > 0 and <= 50";
		allValid = false;
	}
	else {
		$("years_error").firstChild.nodeValue = "";
	}
	if (allValid) {
		$("future_value").value	= calculateFV(investment,rate,years);
	}
};

//	This is convention. It normall makes shit work. You will need to adjust the event handlers to your functions
//	You'll be changing the add_task to the button ID
	window.onload = function() {
    $("calculate").onclick = processEntries;
}