// Task 1- Customer Invoice Calculation
//Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount.
function calculateInvoice(subtotal, taxRate, discount) {
    //Formula:
    const total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);}
//Test Data: 
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"