function incomeTaxCalculator(income) {
    const taxRate = 0.15;
    const taxAmount = income * taxRate;
    return taxAmount;
    }
    const income = 10000;
    const tax = incomeTaxCalculator(income);
    console.log(tax);