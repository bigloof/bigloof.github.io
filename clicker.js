var coins = 0;
var coinsPS = 0;
var coinsPC = 1;
var costPS = 50;
var costPSh = 100;
var costPSt = 1000
    
function gainCoin() {coins += coinsPC;}
setInterval(function renderCoins(){document.getElementById("coins").innerHTML = "$" + "" + coins;})
setInterval(function renderCoins(){document.getElementById("coinsPS").innerHTML = "$" + "" + coinsPS + " /sec";})
setInterval(function renderCoins(){document.getElementById("costPS").innerHTML = "Cost:" + "" + costPS;})
setInterval(function renderCoins(){document.getElementById("costPSh").innerHTML = "Cost:" + "" + costPSh;})
setInterval(function renderCoins(){document.getElementById("costPSt").innerHTML = "Cost:" + "" + costPSt;})

function gainTenPS() 
    { 
        if(coins >= costPS)
        { 
            coinsPS += 10; 
            coins -= costPS; 
            costPS += 10; 
        
            } else { 
                alert("Not Enough Money");
        }
    }
function gainHundredPS() 
    { 
        if(coins >= costPSh)
        { 
            coinsPS += 100; 
            coins -= costPSh; 
            costPSh += 100; 
        
            } else { 
                alert("Not Enough Money");
        }
    }
function gainThousandPS() 
    { 
        if(coins >= costPSh)
        { 
            coinsPS += 1000; 
            coins -= costPSt; 
            costPSt += 1000; 
        
            } else { 
                alert("Not Enough Money");
        }
    }
setInterval(function coinPS(){coins += coinsPS;}, 1000)

/*function move() {
    var elem = document.getElementById("myBar"); 
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            move();
        } else {
            width++; 
            elem.style.width = width + '%'; 
            document.getElementById("label").innerHTML = "$" + "" + coins;
        }
    }
}*/
