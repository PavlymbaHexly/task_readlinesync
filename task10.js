function generateRandomEquation() {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const c = getRandomNumber();
    const equation = `${a}x + ${b} = ${c}`;
    return equation;
    }
    
    function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
    }
    
    const randomEquation = generateRandomEquation();
    console.log(randomEquation);