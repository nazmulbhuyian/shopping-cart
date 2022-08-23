

function calculateSubTotal(){
    const currentPhoneTotal = document.getElementById('phone-total');
    const currentCaseTotal = document.getElementById('case-total');
    const phonePrice = parseInt(currentPhoneTotal.innerText);
    const caseTotal = parseInt(currentCaseTotal.innerText);

    const currentSubTotal = phonePrice + caseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

    const currentSubTaxString = (currentSubTotal * 0.1).toFixed(2);
    const currentSubTax = parseFloat(currentSubTaxString);
    const subTotalTax = document.getElementById('tax');
    subTotalTax.innerText = currentSubTax;

    const SubTotal = currentSubTotal + currentSubTax;
    const subTotalAll = document.getElementById('final-total');
    subTotalAll.innerText = SubTotal;

}
