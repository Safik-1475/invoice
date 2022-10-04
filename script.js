// Get the submit button 
const detailSubmitBtn = document.getElementById('detail-submit-btn');
// console.log(detailSubmitBtn);

// Handle submit function 
detailSubmitBtn.addEventListener('click', function () {
    const buyerDetailInput = document.querySelector('#buyer-details-input');
    // console.log(buyerDetailInput);
    const buyerDetailInputValue = buyerDetailInput.value;
    // console.log(buyerDetailInputValue);
    // get buyer info 
    document.getElementById('buyer-info').innerText = buyerDetailInputValue;
    // console.log(buyerInfo);
    buyerDetailInput.value = '';
});


//  Get the add Details button
const detailsAddBtn = document.getElementById('add-details-btn');
// console.log(detailsAddBtn);

// Handle add details button 
detailsAddBtn.addEventListener('click', function () {
    // console.log('Hello Details add button');
    // Selected all item input field
    const itemName = document.querySelector('#item-name-input');
    const itemPrice = document.querySelector('#item-price-input');
    const itemQuantity = document.querySelector('#item-quantity-input');
    // console.log(itemName);
    // console.log(itemPrice);
    // console.log(itemQuantity);

    // Get all input value 
    const itemNameValue = itemName.value;
    const itemPriceValue = parseFloat(itemPrice.value);
    const itemQuantityValue = itemQuantity.value;
    const totalPrice = itemPriceValue * itemQuantityValue;

    if (itemNameValue == '' && itemNameValue == 0) {
        alert('Please valid item name');
    } else if (itemPriceValue < 0 && itemPriceValue == '') {
        alert('Please valid price input');
    } else if (itemQuantityValue < 0 && itemQuantityValue == '') {
        alert('Please quantity input field');
    }

    // Get tbody
    const tbody = document.getElementById('info-table');
    // Create html element 
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const span = document.createElement('span');

    th.innerText = itemNameValue;
    td1.innerText = itemPriceValue;
    td2.innerText = itemQuantityValue;
    span.innerText = '$';
    td3.innerText = totalPrice;
    // all element tr appendChild
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2);
    td3.prepend(span);
    tr.appendChild(td3);

    tbody.appendChild(tr);

    // get subtotal 
    const subTotal = document.getElementById('sub-total').innerText = totalPrice;
    // console.log(subTotal);
    const tax = subTotal / 100 * 10;
    const grandTotal = subTotal + tax;
    document.getElementById('tax').innerText = tax;
    const totalPriceIncludesTax = document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('grand-total-2').innerText = totalPriceIncludesTax;

    // empty input field
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';


});