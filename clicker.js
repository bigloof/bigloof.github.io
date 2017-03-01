function Round(input,forcedecimal) { //Round a number to the "forcedecimal" number of decimal places
	forcedecimal = Math.pow(10,forcedecimal); //Calculate the number of decimal places to round
 
	var result = Math.round(input * forcedecimal) / forcedecimal;
 
	return result;
}
function AddSeparators(input,separator,forcedecimal) { //Add separators to large numbers, returns a string
	var Before = String(input); //Turn the input into a string
	var SplitBefore = Before.split("."); //Split the input by "." to get the decimal
	var After = ""; //Reset the result
	var LastThree = ""; //Reset the last 3 characters
 
	while (SplitBefore[0].length > 0) { //While the left half of the number is still there
		LastThree = SplitBefore[0].slice(-3); //Take the last 3
		SplitBefore[0] = SplitBefore[0].slice(0,-3); //Remove the last 3
		if (After.length == 0) { After = LastThree; } else { After = LastThree + separator + After; } //Append the last 3
	}
 
	if (forcedecimal > 0) { //If the decimal number is enabled
		After += "."; //Add the decimal place
		var AddZeros = forcedecimal;
 
		if (SplitBefore[1]) { //If a decimal string already exists
			AddZeros -= SplitBefore[1].length; //Get the number of trailing zeros required
			if (AddZeros < 0) {AddZeros = 0;}
			After += SplitBefore[1].substring(0,forcedecimal - AddZeros); //Add the existing trailing digits
		}
 
		for (var zeros=0;zeros<AddZeros;zeros++) { //Add any trailing zeros
			After += "0";
		}
	}
 
	return After; //Return the number as a string
} 
var Dif = 12.75; //difficulty
var coins = 0.0;
var coinsPS = 0.0;
var coinsPC = 1;
var UpCost50 = 10;
var UpCost100 = 100;
var UpCost1000 = 1000;
var UpCostMil = 1000000; //1mil
var UpCostBil = 1000000000; //1bil
var UpCostTril = 1000000000000; //1tril
    
function gainCoin() {coins += coinsPC; }
setInterval(function renderCoins() {document.getElementById("coins").innerHTML = "$" + AddSeparators(coins,","); });
setInterval(function renderCoins() {document.getElementById("coinsPS").innerHTML = "$" + AddSeparators(coinsPS,',') + " /sec"; });
setInterval(function renderCoins() {document.getElementById("UpCost50").innerHTML = "+ $" + UpCost50; });
setInterval(function renderCoins() {document.getElementById("UpCost100").innerHTML = "+ $" + UpCost100; });
setInterval(function renderCoins() {document.getElementById("UpCost1000").innerHTML = "+ $" + UpCost1000; });
setInterval(function renderCoins() {document.getElementById("UpCostMil").innerHTML = "+ $" + UpCostMil; });
setInterval(function renderCoins() {document.getElementById("UpCostBil").innerHTML = "+ $" + UpCostBil; });
setInterval(function renderCoins() {document.getElementById("UpCostTril").innerHTML = "+ $" + UpCostTril; });

function gainFiftyPS() {
    if (coins >= UpCost50) {
    coinsPS += 50;
    coins -= UpCost50;
    UpCost50 += 50*Dif;
    } else {
 setTimeout(function mouseDown() {
    document.getElementById("color").style.color = "red";
});

setTimeout(function mouseUp() {
    document.getElementById("color").style.color = "#e6e6e6";
},2000);
    }
}
function gainHundredPS() {
    if (coins >= UpCost100) {
        coinsPS += 100;
        coins -= UpCost100;
        UpCost100 += 100*Dif;
    } else {
 setTimeout(function mouseDown() {
    document.getElementById("color").style.color = "red";
});

setTimeout(function mouseUp() {
    document.getElementById("color").style.color = "#e6e6e6";
},2000);
    }
}
function gainThousandPS() {
    if (coins >= UpCost1000) {
        coinsPS += 1000;
        coins -= UpCost1000;
        UpCost1000 += 1000*Dif;
    } else {
 setTimeout(function mouseDown() {
    document.getElementById("color").style.color = "red";
});

setTimeout(function mouseUp() {
    document.getElementById("color").style.color = "#e6e6e6";
},2000);
    }
}
function gainMilPS() {
    if (coins >= UpCostMil) {
        coinsPS += 1000000;
        coins -= UpCostMil;
        UpCostMil += 1000000*Dif;
    } else {
 setTimeout(function mouseDown() {
    document.getElementById("color").style.color = "red";
});

setTimeout(function mouseUp() {
    document.getElementById("color").style.color = "#e6e6e6";
},2000);
    }
}
function gainBilPS() {
    if (coins >= UpCostBil) {
        coinsPS += 1000000000;
        coins -= UpCostBil;
        UpCostBil += 1000000000*Dif;
    } else {
 setTimeout(function mouseDown() {
    document.getElementById("color").style.color = "red";
});

setTimeout(function mouseUp() {
    document.getElementById("color").style.color = "#e6e6e6";
},2000);
    }
}
function gainTrilPS() {
    if (coins >= UpCostTril) {
        coinsPS += 1000000000000;
        coins -= UpCostTril;
        UpCostTril += 1000000000000*Dif;
    } else {
 setTimeout(function mouseDown() {
    document.getElementById("color").style.color = "red";
});

setTimeout(function mouseUp() {
    document.getElementById("color").style.color = "#e6e6e6";
},2000);
    }
}
setInterval(function coinPS() {coins += coinsPS; }, 2000);
