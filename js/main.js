function updateCaseNum(product ,price ,increaseCase){
    const productTotalText = document.getElementById(product+'-number');
    let productTotalValue = productTotalText.value;
    if(increaseCase){
        productTotalValue = parseInt(productTotalValue) + 1;
    }else if (productTotalValue>0){
        productTotalValue = parseInt(productTotalValue) - 1;
    }
    productTotalText.value = productTotalValue;
    // update total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productTotalValue * price;
    subtotoal();

    }
function subtotoal(){
    const subTotalText = document.getElementById('sub-total');
    let subTotal = parseInt(subTotalText.innerText);
    const totalPhonePrice = parseInt(document.getElementById('phone-total').innerText);
    const totalCasePrice = parseInt(document.getElementById('case-total').innerText);
    subTotal = totalPhonePrice+totalCasePrice;
    subTotalText.innerText = subTotal;
    console.log(subTotal);
    //Tax amount 
    const taxTex = document.getElementById('tax-amount');
    let taxTotal = taxTex.innerText;
    tax = (subTotal * .2).toFixed(2);
    taxTex.innerText = tax

    const totalPrice = document.getElementById('total-price');
    let totalPricesVal = parseFloat(subTotal)+parseFloat(tax);
    totalPrice.innerText = totalPricesVal.toFixed(2); 


}

//Handle Phone elements
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNum('phone',1219,true)
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNum('phone',1219,false)
})



    


//Handle Case Elements

document.getElementById('case-plus').addEventListener('click',function(){
   updateCaseNum('case',69,true)
    
})

document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNum('case',69,false);
})