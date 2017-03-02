var SI_PREFIXES = [ "", " K", " M", " B", "  T", " P", " E" ];

function AbbreviateNumber(number) {

	// what tier? (determines SI prefix)
	var tier = Math.log10(number) / 3 | 0;

	// if zero, we don't need a prefix
	if (tier == 0)
		return number;

	// get prefix and determine scale
	var prefix = SI_PREFIXES[tier];
	var scale = Math.pow(10, tier * 3);

	// scale the number
	var scaled = number / scale;

	// format number and add prefix as suffix
	return scaled.toFixed(1) + prefix;
}

var Dif = 12.75; //difficulty
var coins = 1.0;
var coinsPS = 0.0;
var coinsPC = 1;
var UpCost1 = 1;
var UpCost50 = 50;
var UpCost100 = 100;
var UpCost1000 = 1000;
var UpCostMil = 1000000; //1mil
var UpCostBil = 1000000000; //1bil
var UpCostTril = 1000000000000; //1tril

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

function gainOnePS() {
	if (coins >= UpCost1) {
		coinsPS += 1;
		coins -= UpCost1;
		UpCost1 += 1 * Dif;
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