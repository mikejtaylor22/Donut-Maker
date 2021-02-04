export class autoClickerClass {
  constructor(amount, price, isAutoClickerUsed, numberOfAutoClickersUsed) {
    this.amount = amount;
    this.price = price;
    this.isAutoClickerUsed = false;
    this.numberOfAutoClickersUsed = 0;
  }

  getAutoClickerAmount() {
    return this.amount;
  }
  getAutoClickerPrice() {
    return this.price;
  }
  purchaseAutoClicker() {
    this.amount++;
    this.price += this.price * 0.1;
    console.log("new auto clicker price is " + this.price);
  }

  updateAutoClickerPrice() {
    this.price += this.price * 0.1;
  }

  enableAutoClickerUse() {
    if (this.amount > 0) {
      document
        .getElementById("autoClickerUseButton")
        .classList.add("is-visible");
    } else {
      document
        .getElementById("autoClickerUseButton")
        .classList.remove("is-visible");
    }
  }

  useAutoClicker() {
    this.isAutoClickerUsed = true;
    this.amount--;
    this.numberOfAutoClickersUsed++;
    totalAutoClickersUsed.innerHTML =
      "Total AutoClickers used: " + this.numberOfAutoClickersUsed;
    return this.numberOfAutoClickersUsed;
  }
}
