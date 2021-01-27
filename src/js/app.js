import {donutMultiplierClass} from './multiplier.js';
import {autoClickerClass} from './autoclicker.js';
let donutMultiplierObj = new donutMultiplierClass(0,10,0)
let autoClickerObj = new autoClickerClass(0,100)

let donutCount = 0;

//disable purchase buttons from start
function disablePurchaseButtons(){
document.getElementById("purchaseAutoClicker").disabled = true;
document.getElementById("purchaseDonutMultiplier").disabled = true;
}
disablePurchaseButtons();

//displays the counts on the page
document.getElementById("multiplierCount").innerHTML = donutMultiplierObj.amount;
document.getElementById("autoClickerCount").innerHTML = autoClickerObj.amount;

document.querySelector("#autoClickerPrice").innerHTML = 'Price: ' + autoClickerObj.price;
document.querySelector("#multiplierPrice").innerHTML = 'Price: ' + donutMultiplierObj.price;

document.querySelector("#multiplierDisplay").innerHTML = 'x' + donutMultiplierObj.multiplier;


  

  function enableAutoClickerBtn() {
    document.getElementById("purchaseAutoClicker").disabled = false;
  }

  function enableMultiplierBtn() {
    document.getElementById("purchaseDonutMultiplier").disabled = false;
  }



document.getElementById("addDonutButton").onclick = function addDonut(){
    
    if(!donutMultiplierObj.isMultiplierUsed){
        donutCount += 1;
    } else {
        donutCount +=donutMultiplierObj.multiplier;
    }
    console.log('donut count = ' + donutCount);
    document.getElementById("counter").innerHTML = getDonutCount();
    enablePurchaseButtons();
}

function enablePurchaseButtons(){
    if(donutCount >= donutMultiplierObj.price){
        enableMultiplierBtn();
    } else {
        document.getElementById("purchaseDonutMultiplier").disabled = true;
    }
    if(donutCount >= autoClickerObj.price){
        enableAutoClickerBtn();
    } else {
        document.getElementById("purchaseAutoClicker").disabled = true;
    }
}


document.getElementById("purchaseDonutMultiplier").onclick = ()=> {
    console.log('purchased multiplier')
    donutCount -=donutMultiplierObj.price;
    donutMultiplierObj.purchaseMultiplier();
    document.getElementById("counter").innerHTML = getDonutCount();
    document.getElementById("multiplierCount").innerHTML = donutMultiplierObj.amount;
    document.querySelector("#multiplierPrice").innerHTML = 'Price: ' + donutMultiplierObj.price;
    donutMultiplierObj.enableMultiplierUse();
    enablePurchaseButtons();
    
}

document.getElementById("purchaseAutoClicker").onclick = ()=> {
    console.log('purchased autoclicker')
    donutCount -=100;
    autoClickerObj.purchaseAutoClicker();
    document.getElementById("counter").innerHTML = getDonutCount();
    document.getElementById("autoClickerCount").innerHTML = autoClickerObj.amount;
    document.querySelector("#autoClickerPrice").innerHTML = 'Price: ' + autoClickerObj.price;
    autoClickerObj.enableAutoClickerUse();
    enablePurchaseButtons();
    
    
}

function checkPurchaseButtons(){
    if(getDonutCount() < 10){
        document.getElementById("purchaseDonutMultiplier").disabled = true;
    } else {
        document.getElementById("purchaseDonutMultiplier").disabled = false;
    }

    if(getDonutCount() < 100){
        document.getElementById("purchaseAutoClicker").disabled = true;
    } else {
        document.getElementById("purchaseAutoClicker").disabled = false;
    }
}

document.querySelector("#multiplierUseButton").onclick = ()=>{
    console.log('multiplier used');
    donutMultiplierObj.useMultiplier();
    document.getElementById("multiplierCount").innerHTML = donutMultiplierObj.amount;
    donutMultiplierObj.enableMultiplierUse();
}

document.querySelector("#autoClickerUseButton").onclick = () =>{
    console.log('autoclicker used');
    autoClickerObj.useAutoClicker();
    autoClickerObj.enableAutoClickerUse();
    document.querySelector("#autoClickerCount").innerHTML = autoClickerObj.amount;
    document.getElementById("counter").innerHTML = donutCount;
    console.log('donut count after clicker use ' +donutCount)
    console.log('multiplier used? ' +donutMultiplierObj.isMultiplierUsed);
    let myVar = setInterval(() => {
        document.getElementById("counter").innerHTML = donutCount;
        console.log('autoclick using!! count is ' + donutCount);
        enablePurchaseButtons();
        if(donutMultiplierObj.isMultiplierUsed){
            donutCount +=donutMultiplierObj.multiplier;
        } else {
            donutCount+=1;
        }
        
        
    }, 1000);
  
   
}

function getDonutCount(){
    return donutCount;
}

