function calculateTime(distance, speed) {
    const timeInHours = distance / speed;
    const hours = Math.floor(timeInHours);
    const minutes = Math.round((timeInHours - hours) * 60);
    
    return `${hours}ч. ${minutes}м.`;
    }
    
    const distanceKM = 120;
    const speedKPH = 60;
    const travelTime = calculateTime(distanceKM, speedKPH);
    console.log(travelTime);