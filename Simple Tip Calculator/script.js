let billAmount = document.getElementById("amount");
let tipPercent = document.getElementById("percentage");
let calcBtn = document.getElementById("calc-button");

calcBtn.addEventListener("click", calculateTip);
function calculateTip() {
    let billAmtValue = billAmount.value;
    let tipPercentValue = tipPercent.value;
    let tipAmt = (tipPercentValue / 100) * billAmtValue;
    document.getElementById("tip-amount").innerHTML = tipAmt.toFixed(2);
    document.getElementById("total-amount").innerHTML = billAmtValue;
}