// JavaScript Document
"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var calculateTaxRate = function(revenue,federal_rate) {
	var taxes_owed = (revenue + revenue*federal_rate + revenue*idaho);
	taxes_owed = taxes_owed.toFixed(2);
	return taxes_owed;
};

var processEntries = function() {
    var revenue = parseFloat( $("revenue").value );
    var federal_rate = 0;
	var federalOwed = 0;
	var stateOwed = 0;
	var idaho = .074;
	var tax_holder = 0;
	var allValid = true;
	
			$("revenue_error").innerHTML = "Must input a number";
	
	if (isNaN(revenue)) {
		$("revenue_error").innerHTML = "Must input a number";
		$("revenue").value = "";
		allValid = false;
	}
	else {
		$("revenue_error").innerHTML = "";
	}
	//You need an if statement for the Federal taxes based on the Federal corporate tax rate 
	//You are going to need to disable all of the other
	if (!isNaN(revenue) && revenue < 0 || revenue==0) {
		$("taxes_owed").value = "Business owes no taxes";
		allValid = false;
	}
	else if ((!isNaN(revenue)) && (0 < revenue && revenue < 50000)) {
		federal_rate=.15;
		$("federal_rate").value = (revenue*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = (revenue*federal_rate+revenue*idaho).toString();
	}
	else if ((!isNaN(revenue)) && (50000 <= revenue && revenue < 75000)) {
		tax_holder=7500;
		federal_rate=.25;
		$("federal_rate").value = (((revenue-50000)*federal_rate)+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = ((revenue-50000)*federal_rate+revenue*idaho+tax_holder).toString();
	}
	else if ((!isNaN(revenue)) && (75000 <= revenue && revenue < 100000)) {
		tax_holder=13750;
		federal_rate=.34;
		$("federal_rate").value = ((revenue-75000)*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = ((revenue-75000)*federal_rate+revenue*idaho+tax_holder).toString();
	}
	else if ((!isNaN(revenue)) && (100000 <= revenue && revenue < 335000)) {
		tax_holder=22250;
		federal_rate=.39;
		$("federal_rate").value = ((revenue-100000)*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = ((revenue-100000)*federal_rate+revenue*idaho+tax_holder).toString();
	}
	else if ((!isNaN(revenue)) && (335000 <= revenue && revenue < 10000000)) {
		tax_holder=113900;
		federal_rate=.34;
		$("federal_rate").value = ((revenue-335000)*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = ((revenue-335000)*federal_rate+revenue*idaho+tax_holder).toString();
	}
	else if ((!isNaN(revenue)) && (10000000 <= revenue && revenue < 15000000)) {
		tax_holder=3400000;
		federal_rate=.35;
		$("federal_rate").value = ((revenue-1000000)*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = ((revenue-1000000)*federal_rate+revenue*idaho+tax_holder).toString();
	}
	else if ((!isNaN(revenue)) && (15000000 <= revenue && revenue < 18333333)) {
		tax_holder=5150000;
		federal_rate=.38;
		$("federal_rate").value = ((revenue-1500000)*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = ((revenue-1500000)*federal_rate+revenue*idaho+tax_holder).toString();
	}
	else if ((!isNaN(revenue)) && (18333333 <= revenue)) {
		tax_holder = 0;
		federal_rate = .35;
		$("federal_rate").value = (revenue*federal_rate+tax_holder).toString();
		$("idaho_rate").value = (revenue*idaho).toString();
		$("taxes_owed").value = (revenue*federal_rate+revenue*idaho+tax_holder).toString();
	};
	if (allValid) {
		$("future_value").value	= calculateTaxRate(revenue,federal_rate,years);
	}
};

window.onload = function() {
//    $("Calculate_button").onclick = processEntries;
}
