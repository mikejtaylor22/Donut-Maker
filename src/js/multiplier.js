export class donutMultiplierClass {

    constructor(amount,price,multiplier,isMultiplierUsed,numberOfMultipliersUsed){
        this.amount = amount;
        this.price = price;
        this.multiplier = multiplier;
        this.isMultiplierUsed = isMultiplierUsed;
        this.numberOfMultipliersUsed = 0;
    }
    purchaseMultiplier(){
        this.amount++;
        this.price += (this.price * .10);
        console.log('new multiplier price ' +this.price);
    }
    enableMultiplierUse(){
        if(this.amount > 0 ){
            document.getElementById("multiplierUseButton").classList.add('is-visible');
        } else {
            document.getElementById("multiplierUseButton").classList.remove('is-visible');
        }
    }
    useMultiplier(){
        this.isMultiplierUsed = true;
        this.numberOfMultipliersUsed+=1;
        this.multiplier = Math.pow(1.2,this.numberOfMultipliersUsed);
        console.log('multiplier ' + this.multiplier);
        this.amount--;
        document.querySelector("#multiplierDisplay").innerHTML = 'x' + this.multiplier;
        return this.multiplier;
    }
    isMultiplierUsedF(){
        return this.isMultiplierUsed;
    }
}