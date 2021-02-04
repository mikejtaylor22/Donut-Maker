import { donutMultiplierClass } from "./multiplier.js";
import { autoClickerClass } from "./autoclicker.js";

let donutMultiplierObj = new donutMultiplierClass(0, 10, 0);
let autoClickerObj = new autoClickerClass(0, 100);
let donutCount = 0;

function disablePurchaseButtons() {
  purchaseAutoButton.disabled = true;
  purchaseMultiplierButton.disabled = true;
}
disablePurchaseButtons();

counterDisplay.innerHTML = getDonutCount();
multiplierCount.innerHTML = donutMultiplierObj.amount;
autoClickerCount.innerHTML = autoClickerObj.amount;
autoClickerPrice.innerHTML = "Price: " + autoClickerObj.price;
multiplierPrice.innerHTML = "Price: " + donutMultiplierObj.price;
// multiplierDisplay.innerHTML = "x" + donutMultiplierObj.multiplier;
multiplierDisplay.innerHTML = "x1";
getJokeButton.disabled = true;
totalMultipliersUsed.innerHTML =
  "Total Multipliers used: " + donutMultiplierObj.numberOfMultipliersUsed;
totalAutoClickersUsed.innerHTML =
  "Total AutoClickers used: " + autoClickerObj.numberOfAutoClickersUsed;

function enableAutoClickerBtn() {
  purchaseAutoButton.disabled = false;
}

function enableMultiplierBtn() {
  purchaseMultiplierButton.disabled = false;
}

addDonutButton.onclick = function addDonut() {
  if (!donutMultiplierObj.isMultiplierUsed) {
    donutCount += 1;
  } else {
    donutCount += donutMultiplierObj.multiplier;
  }
  counterDisplay.innerHTML = getDonutCount();
  enablePurchaseButtons();
  if (donutCount >= 5000) {
    getJokeButton.disabled = false;
  }
};

function enablePurchaseButtons() {
  if (donutCount >= donutMultiplierObj.price) {
    enableMultiplierBtn();
  } else {
    purchaseMultiplierButton.disabled = true;
  }
  if (donutCount >= autoClickerObj.price) {
    enableAutoClickerBtn();
  } else {
    purchaseAutoButton.disabled = true;
  }
  if (donutCount >= 5000) {
    getJokeButton.disabled = false;
  }
}

purchaseMultiplierButton.onclick = () => {
  donutCount -= donutMultiplierObj.price;
  donutMultiplierObj.purchaseMultiplier();
  counterDisplay.innerHTML = getDonutCount();
  multiplierCount.innerHTML = donutMultiplierObj.amount;
  multiplierPrice.innerHTML = "Price: " + donutMultiplierObj.price;
  donutMultiplierObj.enableMultiplierUse();
  enablePurchaseButtons();
};

purchaseAutoButton.onclick = () => {
  donutCount -= autoClickerObj.price;
  autoClickerObj.purchaseAutoClicker();
  counterDisplay.innerHTML = getDonutCount();
  autoClickerCount.innerHTML = autoClickerObj.amount;
  autoClickerPrice.innerHTML = "Price: " + autoClickerObj.price;
  autoClickerObj.enableAutoClickerUse();
  enablePurchaseButtons();
};

multiplierUseButton.onclick = () => {
  donutMultiplierObj.useMultiplier();
  multiplierCount.innerHTML = donutMultiplierObj.amount;
  donutMultiplierObj.enableMultiplierUse();
};

autoClickUseButton.onclick = () => {
  autoClickerObj.useAutoClicker();
  autoClickerObj.enableAutoClickerUse();
  autoClickerCount.innerHTML = autoClickerObj.amount;
  counterDisplay.innerHTML = donutCount;

  let myVar = setInterval(() => {
    counterDisplay.innerHTML = getDonutCount();
    enablePurchaseButtons();
    if (donutMultiplierObj.isMultiplierUsed) {
      donutCount += donutMultiplierObj.multiplier;
    } else {
      donutCount += 1;
    }
  }, 1000);
};

function getDonutCount() {
  return "Donut Count: " + donutCount;
}

let userAction = async () => {
  console.log("getting joke! appjs");
  let response = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  let myJson = await response.json(); //extract JSON from the http response

  let myJoke = myJson.joke;

  document.querySelector("#displayJoke").innerHTML = myJoke;
};

getJokeButton.onclick = () => {
  userAction();
  donutCount -= 5000;
  console.log(donutCount);
  counterDisplay.innerHTML = donutCount;
  if (donutCount < 5000) {
    getJokeButton.disabled = true;
  } else {
    getJokeButton.disabled = false;
  }
};
document.querySelector("#jokePrice").innerHTML = "Price: 5000";

let tacoGenerate = async () => {
  let response = await fetch("http://taco-randomizer.herokuapp.com/random/", {
    method: "GET",
  });
  let tacoJson = await response.json();
  console.log(tacoJson);
};
tacoGenerate();
