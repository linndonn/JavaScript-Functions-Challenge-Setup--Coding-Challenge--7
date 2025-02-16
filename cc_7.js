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

//Task 3 - Customer Loyalty Discount
//Write an arrow function calculateLoyaltyDiscount(amount, years) that applies a discount:
const calculateLoyaltyDiscount = (amount, years) => {
//years >= 5: 15% discount
let LoyaltyDiscount;
if (years >= 5) LoyaltyDiscount = 0.15;
//years >= 3: 10% discount
else if (years >= 3) LoyaltyDiscount = 0.1;
//years < 3: 5% discount
else LoyaltyDiscount = 0.05;
//Formula to calculate the price after discount
const discountedPrice = amount * (1 - LoyaltyDiscount);
//Logged into console
console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
};
//Test Data:
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task 4 - Product Shipping Cost Calculation
// Write a function calculateShippingCost(weight, location, expedited = false) to calculate shipping fees:
function calculateShippingCost(weight, location, expedited = false) {
    let cost = 0;
    // USA shipping fee = $5.00 + $0.50 per pound:
    if (location === "USA") {
      cost = 5 + (0.50 * weight);} 
    // Canada shipping fee = $10.00 + $0.70 per pound:
    else if (location === 'Canada') {
      cost = 10 + (0.7 * weight);}
   // Expedited shipping = additional $10.00
    if (expedited) {
      cost += 10.00;}
 // Logging into console
    console.log(`Shipping Cost: $${cost.toFixed(2)}`);
  };
  //Test Data:
  calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

//Task 5 - Business Loan Interest Calculation
//Write a function calculateLoanInterest(principal, rate, years) that returns total interest.
function calculateLoanInterest(principal, rate, years) {
 //Formula:
 const totalInterest = principal * rate * years;
//Logging into console
console.log(`Total Interest: $${totalInterest.toFixed(2)}`);
};
//Test Data:
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

// Task 6 - Filtering High-Value Transactions
// Declare an array transactions with at least five amounts.
let transactions = [100, 200, 900, 4000, 5000];
// Write a higher-order function filterHighValueTransactions(transactions, filterFunction) 
// that filters transactions above $1000.
function filterHighValueTransactions(transactions, filterFunction) {
  // Apply filter function
  const filteredTrans = transactions.filter(filterFunction);
  // Logging into console
  console.log("High-value transactions:", filteredTrans);
}
// Test Data 
transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]

//Task 7 - Budget Tracker
//Write a function createBudgetTracker() that returns another function to add expenses and keep a running balance.
function createBudgetTracker() {
//Initalizing the balance
let balance = 0;
return function(expenses) {
//Deducting expense from the balance
balance -= expenses;
//Logging into console
 console.log(`Current balance: -$${Math.abs(balance)}`);
    };
}
//Test Data:
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"