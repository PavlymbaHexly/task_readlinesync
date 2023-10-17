function calculateBalance(incomes, expenses) {
    const totalIncome = calculateTotalAmount(incomes);
    const totalExpenses = calculateTotalAmount(expenses);
    return totalIncome - totalExpenses;
    }
    
    function calculateTotalAmount(list) {
    const amounts = list.split(',').map(item => parseFloat(item));
    const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);
    return totalAmount;
    }
    
    const incomes = '100, 200, 300';
    const expenses = '50, 75, 100';
    const balance = calculateBalance(incomes, expenses);
    console.log(balance);