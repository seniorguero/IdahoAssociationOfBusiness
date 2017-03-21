

function changeFactory( quarters, dimes, nickels, pennies ){
      return Object.create({
      
          "quarters":  quarters,
      
          "dimes":     dimes,
      
          "nickels":   nickels,
      
          "pennies":   pennies,
      
          "toString":  function(){
                       var coinStrings = []
                       
                       if (this.quarters) coinStrings.push( "quarters: " + this.quarters);
                       if (this.dimes   ) coinStrings.push( "dimes: "    + this.dimes   );
                       if (this.nickels ) coinStrings.push( "nickels: "  + this.nickels );
                       if (this.pennies ) coinStrings.push( "pennies: "  + this.pennies );
                       
                       return coinStrings.join(', ');
                       }
      });
}


function calculateChange( dollarAmount ){

    var quarters=0,dimes=0,nickels=0,pennies=0
      , cents = dollarAmount*100;
      ;
    while ( cents >= 0.009 ){
        // fix any rounding errors 
        cents += 0.0001
        if      ( cents >= 25 ){ cents -= 25; quarters += 1; }
        else if ( cents >= 10 ){ cents -= 10; dimes    += 1; }
        else if ( cents >=  5 ){ cents -=  5; nickels  += 1; }
        else if ( cents >=  0 ){ cents -=  1; pennies  += 1; }
    }
    return changeFactory( quarters, dimes, nickels, pennies );
}


window.onload = function(){

    var form     =  document.getElementById( "Change-ITvR2gaM" )
      , element  =  document.getElementById( "Result-ITvR2gaM" )
      , input    =  form.getElementsByTagName('input')[0]
      ;
    
    form.onsubmit = function(){
        element.innerHTML = calculateChange( input.value  % 1 );
        return false; //don't refresh
    }
    

};

