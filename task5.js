function calculateDistance(x1, y1, x2, y2) {
    const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    
    return distance;
    }
    
    const point1X = 1;
    const point1Y = 2;
    const point2X = 4;
    const point2Y = 6;
    const distance = calculateDistance(point1X, point1Y, point2X, point2Y);
    console.log(distance);