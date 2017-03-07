var SI_PREFIXES = [ "", " K", " M", " B", "  T", " P", " E" ];

function AbbreviateNumber(number) {

	// what tier? (determines SI prefix)
	var tier = Math.log10(number) / 3 | 0;

	// if zero, we don't need a prefix
	if (tier == 0) return number;

	// get prefix and determine scale
	var prefix = SI_PREFIXES[tier];
	var scale = Math.pow(10, tier * 3);

	// scale the number
	var scaled = number / scale;

	// format number and add prefix as suffix
	return scaled.toFixed(1) + prefix;
}

var Dif = 1; //difficulty 12.75
var coins = 1;
var coinsPS = 0;
var coinsPC = 1;
var UpCost1 = 1;
var UpCost50 = 50;
var UpCost100 = 100;
var UpCost1000 = 1000;
var UpCostMil = 1000000; //mega	M	Million	Million
var UpCostBil = 1000000000; //giga	G	Billion	Thousand Million/Milliard
var UpCostTril = 1000000000000; //tera	T	Trillion	Billion
var UpCostQuad = 1000000000000000	; //peta	P	Quadrillion	Thousand Billion/Billiard
var UpCostQuin = 1000000000000000000; //exa	E	Quintillion	Trillion
var UpCostSext = 1000000000000000000000; //	zetta	Z	Sextillion	Thousand Trillion/Trilliard
var UpCostSept = 1000000000000000000000000; //	yotta	Y	Septillion	Quadrillion
var PS1 = 1;
var PS50 = 50;
var PS100 = 100;
var PS1000 = 1000;
var PSMil = 1000000; //mega	M	Million	Million
var PSBil = 1000000000; //giga	G	Billion	Thousand Million/Milliard
var PSTril = 1000000000000; //tera	T	Trillion	Billion
var PSQuad = 1000000000000000	; //peta	P	Quadrillion	Thousand Billion/Billiard
var PSQuin = 1000000000000000000; //exa	E	Quintillion	Trillion
var PSSext = 1000000000000000000000; //	zetta	Z	Sextillion	Thousand Trillion/Trilliard
var PSSept = 1000000000000000000000000; //	yotta	Y	Septillion	Quadrillion

/*
 1,000,000,000,000,000,000,000,000	yotta	Y	Septillion	Quadrillion
 1,000,000,000,000,000,000,000	zetta	Z	Sextillion	Thousand Trillion/Trilliard
 1,000,000,000,000,000,000	exa	E	Quintillion	Trillion
 1,000,000,000,000,000	peta	P	Quadrillion	Thousand Billion/Billiard
 1,000,000,000,000	tera	T	Trillion	Billion
 1,000,000,000	giga	G	Billion	Thousand Million/Milliard
 1,000,000	mega	M	Million	Million
 1,000	kilo	k	Thousand	Thousand
 100	hecto	h	Hundred	Hundred
 10	deca	da	Ten	Ten>
 */

function gainCoin() {
	coins += coinsPC;
}
setInterval(function renderCoins() {
	document.getElementById("coins").innerHTML = "$" + AbbreviateNumber(coins);
});
setInterval(function renderCoins() {
	document.getElementById("coinsPS").innerHTML = "$"
			+ AbbreviateNumber(coinsPS) + " /sec";
});
setInterval(function renderCoins() {
	document.getElementById("UpCost1").innerHTML = "+ $"
			+ AbbreviateNumber(UpCost1);
});
setInterval(function renderCoins() {
	document.getElementById("UpCost50").innerHTML = "+ $"
			+ AbbreviateNumber(UpCost50);
});
setInterval(function renderCoins() {
	document.getElementById("UpCost100").innerHTML = "+ $"
			+ AbbreviateNumber(UpCost100);
});
setInterval(function renderCoins() {
	document.getElementById("UpCost1000").innerHTML = "+ $"
			+ AbbreviateNumber(UpCost1000);
});
setInterval(function renderCoins() {
	document.getElementById("UpCostMil").innerHTML = "+ $"
			+ AbbreviateNumber(UpCostMil);
});
setInterval(function renderCoins() {
	document.getElementById("UpCostBil").innerHTML = "+ $"
			+ AbbreviateNumber(UpCostBil);
});
setInterval(function renderCoins() {
	document.getElementById("UpCostTril").innerHTML = "+ $"
			+ AbbreviateNumber(UpCostTril);
});
setInterval(function renderMulti() {
	document.getElementById("Multi").innerHTML = "Multiplier: x"
			+ Multi;
});
setInterval(function renderNext() {
	document.getElementById("Next").innerHTML = "Next Upgrade: Lvl "
			+ Next;
});
var Next = 25;
var Multi = 1;
function Upgrade() {
  if  (clicks == 24) {
      coinsPS *= 2;
      Multi *= 2;
      Next += 25;
      Dif *= 2;
  } else if  (clicks == 49) {
      coinsPS *= 2;
      Multi += 2;
      Next += 50;
      Dif *= 2;
  } else if  (clicks == 99) {
      coinsPS *= 2;
      Multi += 2;
      Next += 150;
      Dif *= 2;
  }
}
function gainOnePS() {
	if (coins >= UpCost1) {
		coinsPS += 1;
		coins -= UpCost1;
		UpCost1 += 1 * Dif;
        Upgrade();
        drawslider(100, 0);
        Click();
       
    } else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
function gainFiftyPS() {
	if (coins >= UpCost50) {
		coinsPS += 50;
		coins -= UpCost50;
		UpCost50 += 50 * Dif;
	} else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
function gainHundredPS() {
	if (coins >= UpCost100) {
		coinsPS += 100;
		coins -= UpCost100;
		UpCost100 += 100 * Dif;
	} else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
function gainThousandPS() {
	if (coins >= UpCost1000) {
		coinsPS += 1000;
		coins -= UpCost1000;
		UpCost1000 += 1000 * Dif;
	} else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
function gainMilPS() {
	if (coins >= UpCostMil) {
		coinsPS += 1000000;
		coins -= UpCostMil;
		UpCostMil += 1000000 * Dif;
	} else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
function gainBilPS() {
	if (coins >= UpCostBil) {
		coinsPS += 1000000000;
		coins -= UpCostBil;
		UpCostBil += 1000000000 * Dif;
	} else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
function gainTrilPS() {
	if (coins >= UpCostTril) {
		coinsPS += 1000000000000;
		coins -= UpCostTril;
		UpCostTril += 1000000000000 * Dif;
	} else {
		setTimeout(function mouseDown() {
			document.getElementById("color").style.color = "red";
		});

		setTimeout(function mouseUp() {
			document.getElementById("color").style.color = "#e6e6e6";
		}, 2000);
	}
}
setInterval(function coinPS() {
	coins += coinsPS;
}, 1000);

var clicks = 0;
    function Click() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
            
    };
setInterval(function renderClicks() {
	document.getElementById("Lvl1").innerHTML = "Lvl. " + clicks;
    });

var slidewhere = 0;
var holvanszlider = 0;
function drawslider(ossz,meik){
	var slidetext = Math.round((meik*100)/ossz);
	document.getElementById("slidebar").style.width=slidetext+"%";
	document.getElementById("slidetext").innerHTML=slidetext+"%";
	holvanszlider = meik;
	t = setTimeout("drawslider(100, slidewhere);slidewhere = holvanszlider + 1; if (slidewhere > 100) {slidewhere = 0;}",200);
}

/*
///////////////////////////////////////////////////////////////////////////////////////////////
//  Script by Paul Proft, http://proft.50megs.com/JSdemos.html  //
//////////////////////////////////////////////////////////////////////////////////////////////

// Set timer lengths in HTML code for start buttons at bottom of this document.
// Set desired container width and interval duration here:
 
   containerWidth = 254;      // pixels (smaller widths draw smoother progress bars)
   intervalDuration = 250;     // milliseconds (depending on computer speed, smaller interval durations might yield inaccurate progress)

drawBar=0;
function progressBar(duration) { 
     resetStart();                                                                                                    // reset variables and style for button-click
     ref=new Date();  start=ref.getTime();                                                                  // gets start time for accuracy check (optional) 
     increment = intervalDuration*containerWidth/duration;                                         // container increment reference (pixels)
     barWidth = interval*increment;                                                                          // bar incremental width (pixels)
     drawBar = setInterval('progress('+duration%intervalDuration+')', intervalDuration);   // updates progress bar each interval duration
}
function progress(lastms) {
     document.getElementById('bar').style.width=barWidth;                                                // updates bar width each iteration
     document.getElementById('showsecs').innerHTML=Math.floor(interval*intervalDuration/1000);  // updates displayed seconds (optional)
     interval++;                                                                                                                // increments interval for next iteration
     if(interval*increment > containerWidth) {                                                                      // tests for last iteration
          clearInterval(drawBar);                                                                                          // clears setInterval
          end=new Date(); end=lastms+end.getTime();                                                         // gets end time for accuracy check (optional)
          setTimeout("document.getElementById('bar').style.width=containerWidth",lastms);    // completes bar width and duration
          setTimeout("document.getElementById('showsecs').innerHTML="+(lastms+intervalDuration*(interval-1))/1000, lastms); // final time
          setTimeout('alert("Actual elapsed time: "+(end-start)/1000+" seconds")', lastms);      // bar duration accuracy check (optional)
     }
     else barWidth = interval*increment;                                                                            // bar width incremented in pixels
}
function resetStart() {                                                                                            // resets variables and style for button-click
     if(drawBar) clearInterval(drawBar);                                                                     // clears setInterval if running
     document.getElementById('bar').style.width = 0;                                                // sets bar width to zero
     document.getElementById('showsecs').innerHTML = 0;                                      // sets seconds to zero
     interval = 1;                                                                                                    // initializes interval 
}
//-->
</script>
</head>
<body bgcolor=cornsilk topmargin=30>
<h3 align=center>Javascript Timer Progress Bar Demo</h3>
<table align=center cellspacing=0><tr><td>                                                             <!-- table used for centering container (optional) -->
     <div id="container">                                                                                           <!-- container width defined in <head> script -->
     <div id="bar"></div></div>                                                                                  <!-- bar width controlled by progressBar() -->
     <div id="showsecs" style="text-align:center">&nbsp;</div>                                   <!-- container for showing seconds (optional) -->
<script>document.getElementById('container').style.width=containerWidth</script>     <!-- show container when page loads (optional) -->
</td></tr></table>                                                                               
<p align=center>
     <input type="button" value=" 5.375 seconds " onclick="progressBar(5375)">          <!-- set timer length (milliseconds) -->
     <input type="button" value=" 30 seconds " onclick="progressBar(30000)">             <!-- set timer length (milliseconds) -->
<br><br><font size=-1>(1 second = 1000 ms)</font></p>
    */