// JavaScript Document

var  div = document.getElementById( "ClockDiv" )
  ,  INTERVAL = 1000 //ms
  ;


function numPad( x ){
	if ( x < 10 )
	      return "0" + x;	
	else  return       x;
}


setInterval( function(){
	  
	  var div = document.getElementById( "ClockDiv" );
	  var now = new Date();
	  var hour;
	  var timeString = "";
	  var timeOfDay;
	  
	  
	  hour = now.getHours();
		  
	  if ( hour > 11) timeOfDay = "PM";
	  if ( hour < 12) timeOfDay = "AM";
	  
	  if ( hour > 12 ) hour -= 12;
	  if ( hour == 0 ) hour  = 12;
	  
	  
	  timeString +=          hour;
	  timeString += ":";
	  timeString += numPad(  now.getMinutes() );
	  timeString += ":";
	  timeString += numPad(  now.getSeconds() );
	  timeString += " ";
	  timeString +=          timeOfDay;

	  	  
	  div.innerHTML = timeString;

	
	}, INTERVAL );



