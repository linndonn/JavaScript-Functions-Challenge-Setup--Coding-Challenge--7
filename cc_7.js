// Task 1- Customer Invoice Calculation
//Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount.
function calculateInvoice(subtotal, taxRate, discount) {
    //Formula:
    const total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);}
//Test Data: 
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// Task 2 - Employee Hourly Wage Calculation
// Declare a function expression calculateHourlyWage(salary, hoursPerWeek) that calculates hourly wage.
const calculateHourlyWage = function(salary, hoursPerWeek) {
    // Formula:
    const hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)} ^_^`);
};
// Test Data:
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"