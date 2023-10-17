function calculateEmployeeBonus(salary, performanceRating) {
    if (performanceRating > 8) {
    return salary * 0.2;
    } else {
    return salary * 0.1;
    }
    }
    
    const employeeSalary = 5000;
    const employeePerformanceRating = 9;
    const bonus = calculateEmployeeBonus(employeeSalary, employeePerformanceRating);
    console.log(bonus);